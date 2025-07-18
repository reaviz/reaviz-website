"use client";

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live-runner'
import * as Reaviz from 'reaviz';
import * as TopoJsonClient from 'topojson-client';
import geojson from 'world-atlas/countries-110m.json';

export const Runner = (props: any) => (
  <div className="flex w-full border rounded-sm border-gray-800 light:border-gray-200 mt-5">
    <LiveProvider
      {...props}
      scope={{
        import: {
          'reaviz': Reaviz,
          'topojson-client': TopoJsonClient,
          'world-atlas/countries-110m.json': geojson,
        }
      }}
    >
      <LiveEditor className="flex-1 font-mono text-sm !bg-gray-800" />
      <LivePreview className="flex-1 p-5 self-center justify-center flex" />
      <LiveError />
    </LiveProvider>
  </div>
);