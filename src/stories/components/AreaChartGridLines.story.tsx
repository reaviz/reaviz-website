import Reac from 'react';
import { singleDateData } from 'reaviz';
import { AreaChart } from 'reaviz';
import { GridlineSeries, Gridline } from 'reaviz';
import {
  Area,
  AreaSeries,
  Line,
  PointSeries,
  StackedAreaSeries,
  StackedNormalizedAreaSeries
} from 'reaviz';

export default {
  title: 'Charts/Area Chart/Gridlines',
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

export const AllAxes = () => (
  <AreaChart
    width={350}
    height={250}
    data={singleDateData}
    gridlines={<GridlineSeries line={<Gridline direction="all" />} />}
  />
);

export const XAxis = () => (
  <AreaChart
    width={350}
    height={250}
    data={singleDateData}
    gridlines={<GridlineSeries line={<Gridline direction="x" />} />}
  />
);

XAxis.story = {
  name: 'X-Axis'
};

export const YAxis = () => (
  <AreaChart
    width={350}
    height={250}
    data={singleDateData}
    gridlines={<GridlineSeries line={<Gridline direction="y" />} />}
  />
);

YAxis.story = {
  name: 'Y-Axis'
};
