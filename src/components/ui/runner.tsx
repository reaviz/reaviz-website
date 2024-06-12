import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live-runner'
import * as Reaviz from 'reaviz';

export const Runner = (props) => (
  <div className="flex w-full border rounded-sm border-gray-800 mt-5">
    <LiveProvider
      {...props}
      scope={{
        import: {
          'reaviz': Reaviz
        }
      }}
    >
      <LiveEditor className="flex-1 font-mono text-sm !bg-gray-800" />
      <LivePreview className="flex-1 p-5 self-center justify-center flex" />
      <LiveError />
    </LiveProvider>
  </div>
);