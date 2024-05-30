import React from 'react';
import { singleDateData } from 'reaviz-data-utils';
import { AreaChart } from 'reaviz';
import {
  Area,
  AreaSeries,
  Line,
  PointSeries,
  StackedAreaSeries,
  StackedNormalizedAreaSeries
} from 'reaviz';
import { ScatterPoint } from 'reaviz';
import { symbol, symbolStar } from 'd3-shape';

export default {
  title: 'Charts/Area Chart/Circle Series',
  component: AreaChart,
  subcomponents: {
    AreaSeries,
    Area,
    Line,
    PointSeries,
    StackedAreaSeries,
    StackedNormalizedAreaSeries
  }
};

export const On = () => (
  <AreaChart
    width={350}
    height={250}
    data={singleDateData}
    series={<AreaSeries symbols={<PointSeries show={true} />} />}
  />
);

export const Off = () => (
  <AreaChart
    width={350}
    height={250}
    data={singleDateData}
    series={<AreaSeries symbols={<PointSeries show={false} />} />}
  />
);

export const OnHover = () => (
  <AreaChart
    width={350}
    height={250}
    data={singleDateData}
    series={<AreaSeries symbols={<PointSeries show="hover" />} />}
  />
);

export const OnlyFirst = () => (
  <AreaChart
    width={350}
    height={250}
    data={singleDateData}
    series={<AreaSeries symbols={<PointSeries show="first" />} />}
  />
);

export const OnlyLast = () => (
  <AreaChart
    width={350}
    height={250}
    data={singleDateData}
    series={<AreaSeries symbols={<PointSeries show="last" />} />}
  />
);

export const Shapes = () => (
  <AreaChart
    width={350}
    height={250}
    data={singleDateData}
    series={
      <AreaSeries
        symbols={
          <PointSeries
            show={true}
            point={
              <ScatterPoint
                symbol={() => {
                  const d = symbol().type(symbolStar).size(175)();

                  return (
                    <path
                      d={d!}
                      style={{
                        fill: 'lime',
                        stroke: 'purple',
                        strokeWidth: 1.5
                      }}
                    />
                  );
                }}
              />
            }
          />
        }
      />
    }
  />
);
