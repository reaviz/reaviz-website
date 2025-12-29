import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const STORIES_DIR = 'src/stories';
const OUTPUT_FILE = 'public/_story-sources.json';

function extractComponentName(fileContent) {
  const metaComponentMatch = fileContent.match(/component:\s*([A-Z][a-zA-Z0-9]*)/);
  if (metaComponentMatch) return metaComponentMatch[1] ?? '';

  const metaTypeMatch = fileContent.match(/Meta<typeof\s+([A-Z][a-zA-Z0-9]*)/);
  if (metaTypeMatch) return metaTypeMatch[1] ?? '';

  const defaultExportMatch = fileContent.match(/export\s+default\s+\{\s*component:\s*([^,\s}]+)/);
  if (defaultExportMatch) return defaultExportMatch[1] ?? '';

  const directExportMatch = fileContent.match(/export\s+default\s+([^;{\s]+)/);
  if (directExportMatch && !directExportMatch[1]?.includes('meta')) {
    return directExportMatch[1] ?? '';
  }

  const storyBookTypes = ['Meta', 'StoryObj', 'StoryFn', 'Story'];
  const importMatches = fileContent.matchAll(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"][^'"]*['"]/g);
  for (const match of importMatches) {
    const imports = match[1]?.split(',') ?? [];
    for (const imp of imports) {
      const cleanImport = imp.trim().replace(/\s+as\s+.*$/, '');
      const componentMatch = cleanImport.match(/^([A-Z][a-zA-Z0-9]*)/);
      if (componentMatch && !storyBookTypes.includes(componentMatch[1] ?? '')) {
        return componentMatch[1] ?? '';
      }
    }
  }
  return 'Component';
}

function generateCSFStorySource(componentName, args) {
  const propsArray = [];
  const cleanArgs = args.replace(/\s+/g, ' ').trim();
  const argPairs = [];
  let current = '';
  let depth = 0;
  let inString = false;
  let stringChar = '';

  for (let i = 0; i < cleanArgs.length; i++) {
    const char = cleanArgs[i];
    if (!inString && (char === '"' || char === "'")) {
      inString = true;
      stringChar = char;
    } else if (inString && char === stringChar && cleanArgs[i - 1] !== '\\') {
      inString = false;
    } else if (!inString) {
      if (char === '{' || char === '[') depth++;
      else if (char === '}' || char === ']') depth--;
      else if (char === ',' && depth === 0) {
        argPairs.push(current.trim());
        current = '';
        continue;
      }
    }
    current += char;
  }
  if (current.trim()) argPairs.push(current.trim());

  for (const pair of argPairs) {
    const colonIndex = pair.indexOf(':');
    if (colonIndex !== -1) {
      const key = pair.substring(0, colonIndex).trim();
      const value = pair.substring(colonIndex + 1).trim();
      if (value === 'true') propsArray.push(key);
      else if (value === 'false') { /* skip */ }
      else if (value.startsWith('"') || value.startsWith("'")) propsArray.push(`${key}=${value}`);
      else if (!isNaN(Number(value))) propsArray.push(`${key}={${value}}`);
      else propsArray.push(`${key}={${value}}`);
    }
  }

  const propsString = propsArray.length > 0 ? ' ' + propsArray.join(' ') : '';
  return `() => <${componentName}${propsString} />;`;
}

function extractStorySource(fileContent, functionName) {
  const componentName = extractComponentName(fileContent);

  // Arrow function: export const Name = () => ...
  const functionRegex = new RegExp(
    `export\\s+const\\s+${functionName}\\s*=\\s*\\([^)]*\\)\\s*=>\\s*([\\s\\S]*?)(?=\\nexport|$)`,
    'g'
  );
  const functionMatch = functionRegex.exec(fileContent);
  if (functionMatch) {
    let functionBody = functionMatch[1]?.trim() ?? '';
    if (functionBody.endsWith(';')) functionBody = functionBody.slice(0, -1);
    return `() => ${functionBody};`;
  }

  // Story object: export const Name: Story = { ... }
  const storyPattern = `export\\s+const\\s+${functionName}\\s*:[^=]*=\\s*\\{`;
  const storyStartMatch = fileContent.match(new RegExp(storyPattern));
  let storyObject = '';
  let objectFound = false;

  if (storyStartMatch) {
    const matchIndex = storyStartMatch.index;
    if (matchIndex !== undefined) {
      const startIndex = matchIndex + storyStartMatch[0].length - 1;
      let braceCount = 0;
      let endIndex = -1;
      let inString = false;
      let stringChar = '';

      for (let i = startIndex; i < fileContent.length; i++) {
        const char = fileContent[i];
        if (!inString && (char === '"' || char === "'")) {
          inString = true;
          stringChar = char;
        } else if (inString && char === stringChar && fileContent[i - 1] !== '\\') {
          inString = false;
        } else if (!inString) {
          if (char === '{') braceCount++;
          else if (char === '}') {
            braceCount--;
            if (braceCount === 0) { endIndex = i; break; }
          }
        }
      }
      if (endIndex !== -1) {
        storyObject = fileContent.substring(startIndex + 1, endIndex).trim();
        objectFound = true;
      }
    }
  }

  if (!objectFound) {
    const fallbackRegex = new RegExp(`export\\s+const\\s+${functionName}\\s*=\\s*\\{([\\s\\S]*?)\\}\\s*;?`, 'g');
    const objectMatch = fallbackRegex.exec(fileContent);
    if (objectMatch) {
      storyObject = objectMatch[1]?.trim() ?? '';
      objectFound = true;
    }
  }

  if (objectFound) {
    const renderIndex = storyObject.indexOf('render:');
    if (renderIndex !== -1) {
      const afterRender = storyObject.substring(renderIndex + 7).trim();
      let params = '';
      let renderFunctionStart = -1;

      if (afterRender.startsWith('(')) {
        const parenEnd = afterRender.indexOf(')');
        if (parenEnd !== -1) {
          params = afterRender.substring(1, parenEnd).trim();
          const arrowIndex = afterRender.indexOf('=>', parenEnd);
          if (arrowIndex !== -1) renderFunctionStart = arrowIndex + 2;
        }
      }

      if (renderFunctionStart !== -1) {
        const functionBody = afterRender.substring(renderFunctionStart).trim();
        if (functionBody.startsWith('{')) {
          let braceCount = 0;
          let endIndex = -1;
          for (let i = 0; i < functionBody.length; i++) {
            if (functionBody[i] === '{') braceCount++;
            else if (functionBody[i] === '}') {
              braceCount--;
              if (braceCount === 0) { endIndex = i; break; }
            }
          }
          if (endIndex !== -1) {
            let renderBody = functionBody.substring(1, endIndex).trim().replace(/,\s*$/, '');
            return params ? `(${params}) => {\n${renderBody}\n}` : `() => {\n${renderBody}\n}`;
          }
        } else {
          let renderBody = functionBody;
          const nextProp = renderBody.match(/,\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*:/);
          if (nextProp) renderBody = renderBody.substring(0, nextProp.index).trim();
          renderBody = renderBody.replace(/,\s*$/, '');
          return params ? `(${params}) => ${renderBody}` : `() => ${renderBody}`;
        }
      }
    }

    const argsMatch = storyObject.match(/args\s*:\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/);
    if (argsMatch) {
      const argsContent = argsMatch[1]?.trim() ?? '';
      if (argsContent) return generateCSFStorySource(componentName, argsContent);
    }
    return `(args) => <${componentName} {...args} />;`;
  }

  return `// Function ${functionName} not found`;
}

function getExportedFunctions(fileContent) {
  const functions = [];
  const regex = /export\s+const\s+([A-Z][a-zA-Z0-9]*)\s*[=:]/g;
  let match;
  while ((match = regex.exec(fileContent)) !== null) {
    functions.push(match[1]);
  }
  return functions;
}

function getStoryFiles(dir) {
  const files = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...getStoryFiles(fullPath));
    else if (entry.name.endsWith('.story.tsx')) files.push(fullPath);
  }
  return files;
}

function main() {
  console.log('Generating story sources...');
  const sources = {};
  const storyFiles = getStoryFiles(STORIES_DIR);

  for (const filePath of storyFiles) {
    const relativePath = filePath.replace(STORIES_DIR + '/', '');
    const fileContent = readFileSync(filePath, 'utf-8');
    const exportedFunctions = getExportedFunctions(fileContent);

    for (const fn of exportedFunctions) {
      const key = `${relativePath}:${fn}`;
      sources[key] = extractStorySource(fileContent, fn);
    }
  }

  if (!existsSync('public')) mkdirSync('public');
  writeFileSync(OUTPUT_FILE, JSON.stringify(sources));
  console.log(`Generated ${Object.keys(sources).length} story sources`);
}

main();
