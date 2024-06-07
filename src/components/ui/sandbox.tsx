import CodeSandbox from '@uiw/react-codesandbox';

export function Sandbox({ code }) {
  return (
    <div
      className="mt-5"
      style={{ height: 350, width: '100%' }}
    >
      <CodeSandbox
        embed
        query="view=split&runonclick=1&module=%2Findex.js&hidenavigation=1"
        files={{
          "package.json": {
            content: {
              dependencies: {
                react: "latest",
                "react-dom": "latest",
                "reaviz": "latest"
              }
            }
          },
          "index.js": {
            content: code
          },
          "index.html": {
            content: `<div id="root"></div>`
          }
        }}
      />
    </div>
  );
}