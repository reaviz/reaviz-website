import React from 'react';
import { singleDateData } from 'reaviz-data-utils';
import { LineChart } from 'reaviz';
import { GridlineSeries, Gridline } from 'reaviz';

export default {
  title: 'Charts/Line Chart/Gridlines',
  component: LineChart
};

export const AllAxes = () => (
  <LineChart
    width={350}
    height={250}
    data={singleDateData}
    gridlines={<GridlineSeries line={<Gridline direction="all" />} />}
  />
);

export const XAxis = () => (
  <LineChart
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
  <LineChart
    width={350}
    height={250}
    data={singleDateData}
    gridlines={<GridlineSeries line={<Gridline direction="y" />} />}
  />
);

YAxis.story = {
  name: 'Y-Axis'
};
