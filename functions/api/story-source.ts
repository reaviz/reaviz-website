export async function onRequestGet(context: any) {
  const url = new URL(context.request.url);
  const storyPath = url.searchParams.get('storyPath') ?? '';
  const functionName = url.searchParams.get('functionName') ?? '';

  if (!storyPath || !functionName) {
    return new Response(JSON.stringify({ error: 'Missing storyPath or functionName' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const sourcesResponse = await context.env.ASSETS.fetch(
      new URL('/_story-sources.json', url.origin)
    );

    if (!sourcesResponse.ok) {
      return new Response(JSON.stringify({ error: 'Story sources not found' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const sources = await sourcesResponse.json();
    const key = `${storyPath}:${functionName}`;
    const source = sources[key];

    if (!source) {
      return new Response(JSON.stringify({ source: `// ${functionName} not found in ${storyPath}` }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ source }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to read story sources' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
