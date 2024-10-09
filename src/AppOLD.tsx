import React from 'react';
import Plot from 'react-plotly.js';
import { PlotParams } from 'react-plotly.js';

interface PlotlyChartProps {
  data: Partial<PlotParams>['data'];
  layout: Partial<PlotParams>['layout'];
}

const PlotlyChart: React.FC<PlotlyChartProps> = ({ data, layout }) => {
  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

const App: React.FC = () => {
  const lineData = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
    },
  ];

  const lineLayout = {
    title: 'Line Chart',
  };

  const barData = [
    {
      x: ['A', 'B', 'C', 'D'],
      y: [20, 14, 23, 25],
      type: 'bar',
    },
  ];

  const barLayout = {
    title: 'Bar Chart',
  };

  return (
    <div>
      <h1>Plotly Self maps</h1>
      <div style={{ width: '600px', height: '400px' }}>
        <PlotlyChart data={lineData} layout={lineLayout} />
      </div>
      <div style={{ width: '600px', height: '400px' }}>
        <PlotlyChart data={barData} layout={barLayout} />
      </div>
    </div>
  );
};

export default App;
