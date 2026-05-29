import { NextRequest } from 'next/server';

// next-on-pages requires every non-static route to run on the Edge runtime;
// a Node-runtime route fails the Cloudflare Pages build.
export const runtime = 'edge';

/**
 * Serves the JSX source for a story export, consumed by the docs StoryRenderer
 * (`/api/story-source?storyPath=...&functionName=...`).
 *
 * On the Edge runtime the Node filesystem is unavailable, so the theme's
 * fs-based `getStorySource` cannot run in production. Instead we read the
 * pre-generated `/_story-sources.json` asset (built by
 * `scripts/generate-story-sources.mjs`). `next dev` serves the same file from
 * `/public`, so dev and prod share a single code path.
 *
 * Note: a Cloudflare Pages Function (a `functions/` handler) cannot serve this
 * route — when next-on-pages emits a `_worker.js`, Cloudflare ignores the
 * `functions/` directory entirely.
 */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const storyPath = searchParams.get('storyPath') ?? '';
  const functionName = searchParams.get('functionName') ?? '';

  if (!storyPath || !functionName) {
    return Response.json(
      { error: 'Missing storyPath or functionName' },
      { status: 400 }
    );
  }

  const response = await fetch(new URL('/_story-sources.json', origin));
  if (!response.ok) {
    return Response.json({ error: 'Story sources not found' }, { status: 500 });
  }

  const sources = (await response.json()) as Record<string, string>;
  const source = sources[`${storyPath}:${functionName}`];

  return Response.json({
    source: source ?? `// ${functionName} not found in ${storyPath}`
  });
}
