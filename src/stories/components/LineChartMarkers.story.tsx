import React from 'react';
import { medDateData, multiDateData } from 'reaviz-data-utils';
import { LinearValueMarker, RadialValueMarker } from 'reaviz';
import { RadialAreaChart, RadialAreaSeries } from 'reaviz';
import { LineChart } from 'reaviz';
import { LineSeries } from 'reaviz';

export default {
  title: 'Charts/Line Chart/Markers',
  component: LineChart,
  subcomponents: {
    LineSeries,
    LinearValueMarker,
    RadialAreaChart,
    RadialAreaSeries,
    RadialValueMarker
  }
};

export const LinearValueMarkers = () => (
  <LineChart
    width={550}
    height={350}
    data={multiDateData}
    series={
      <LineSeries
        type="grouped"
        colorScheme="cybertron"
        valueMarkers={[
          <LinearValueMarker value={12} color="#D740BE" />,
          <LinearValueMarker value={6} color="#F8A340" />
        ]}
      />
    }
  />
);

export const RadialValueMarkersVertical = () => (
  <LineChart
    width={550}
    height={350}
    data={multiDateData}
    series={
      <LineSeries
        type="grouped"
        colorScheme="cybertron"
        valueMarkers={[
          <LinearValueMarker
            value={multiDateData[0].data[1].key}
            color="#D740BE"
            direction="vertical"
          />,
          <LinearValueMarker
            value={multiDateData[0].data[2].key}
            color="#F8A340"
            direction="vertical"
          />
        ]}
      />
    }
  />
);

export const RadialValueMarkers = () => (
  <RadialAreaChart
    height={500}
    width={500}
    data={medDateData}
    innerRadius={0.1}
    series={
      <RadialAreaSeries
        area={null}
        colorScheme="cybertron"
        animated
        interpolation="smooth"
        valueMarkers={[
          <RadialValueMarker key={1} value={12} color="#D740BE" />,
          <RadialValueMarker key={2} value={6} color="#F8A340" />
        ]}
      />
    }
  />
);
