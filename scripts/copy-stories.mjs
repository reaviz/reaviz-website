// Copies reaviz's prebuilt story/block sources into src/ so the docs site can
// render them. Uses only Node built-ins — no devDependency — because this runs
// in `postinstall`, where devDependencies may be absent (e.g. a production
// install). Replaces the previous `cpx` calls.

import { readdirSync, copyFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/** @type {{ from: string; to: string }[]} */
const COPIES = [
  { from: 'node_modules/reaviz/dist/stories', to: 'src/stories/components' },
  { from: 'node_modules/reaviz/dist/blocks', to: 'src/stories/blocks' }
];

for (const { from, to } of COPIES) {
  if (!existsSync(from)) {
    console.warn(`[copy-stories] source missing, skipping: ${from}`);
    continue;
  }

  // Clean stale *.tsx in the destination (mirrors cpx's `-C/--clean`).
  if (existsSync(to)) {
    for (const file of readdirSync(to)) {
      if (file.endsWith('.tsx')) rmSync(join(to, file));
    }
  } else {
    mkdirSync(to, { recursive: true });
  }

  let count = 0;
  for (const file of readdirSync(from)) {
    if (!file.endsWith('.tsx')) continue;
    copyFileSync(join(from, file), join(to, file));
    count++;
  }
  console.log(`[copy-stories] copied ${count} files: ${from} -> ${to}`);
}
