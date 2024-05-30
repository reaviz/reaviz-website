import React from 'react';

import {
  singleDateData,
  medDateData,
  smallDateData,
  sonarData,
  sonarDataEmpties
} from 'reaviz-data-utils';
import { SparklineChart } from 'reaviz';
import { AreaSparklineChart } from 'reaviz';
import { BarSparklineChart } from 'reaviz';
import { SonarChart } from 'reaviz';

export default {
  title: 'Charts/Sparkline'
};

export const Line = () => (
  <SparklineChart width={200} height={55} data={medDateData} />
);

export const Area = () => (
  <AreaSparklineChart width={200} height={85} data={singleDateData} />
);

export const Bar = () => (
  <BarSparklineChart width={200} height={35} data={smallDateData} />
);

export const Sonar = () => (
  <SonarChart width={300} height={50} data={sonarData} />
);

export const SonarEmpties = () => (
  <SonarChart width={300} height={50} data={sonarDataEmpties} />
);
