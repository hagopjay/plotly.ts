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
  // Pie Chart Data
  const pieData = [
    {
      values: [40, 25, 20, 15],
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      type: 'pie',
      hole: 0.4, // Makes it a donut chart
    },
  ];

  const pieLayout = {
    title: 'Revenue Distribution',
    showlegend: true,
  };

  // Bubble Chart Data
  const bubbleData = [
    {
      x: [1, 2, 3, 4],
      y: [10, 11, 12, 13],
      mode: 'markers',
      marker: {
        size: [40, 60, 80, 100],
        color: [
          'rgb(93, 164, 214)',
          'rgb(255, 144, 14)',
          'rgb(44, 160, 101)',
          'rgb(255, 65, 54)',
        ],
      },
      text: ['Category A', 'Category B', 'Category C', 'Category D'],
    },
  ];

  const bubbleLayout = {
    title: 'Market Size Analysis',
    showlegend: false,
  };

  // Area Chart Data
  const areaData = [
    {
      x: [1, 2, 3, 4, 5],
      y: [0, 2, 3, 5, 4],
      fill: 'tozeroy',
      type: 'scatter',
      name: 'Series A',
    },
    {
      x: [1, 2, 3, 4, 5],
      y: [3, 5, 1, 7, 6],
      fill: 'tonexty',
      type: 'scatter',
      name: 'Series B',
    },
  ];

  const areaLayout = {
    title: 'Trend Analysis',
    showlegend: true,
  };

  // Radar Chart Data
  const radarData = [
    {
      type: 'scatterpolar',
      r: [39, 28, 8, 7, 28, 39],
      theta: ['A', 'B', 'C', 'D', 'E', 'A'],
      fill: 'toself',
      name: 'Product 1',
    },
    {
      type: 'scatterpolar',
      r: [1.5, 10, 39, 31, 15, 1.5],
      theta: ['A', 'B', 'C', 'D', 'E', 'A'],
      fill: 'toself',
      name: 'Product 2',
    },
  ];

  const radarLayout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 50],
      },
    },
    title: 'Product Comparison',
    showlegend: true,
  };

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
      <h3>Advanced Analytics Dashboard</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}
      >
        <div>
          <h1>Plotly Self maps</h1>
          <div style={{ width: '600px', height: '400px' }}>
            <PlotlyChart data={lineData} layout={lineLayout} />
          </div>
          <div style={{ width: '600px', height: '400px' }}>
            <PlotlyChart data={barData} layout={barLayout} />
          </div>
        </div>
        <div style={{ width: '100%', height: '400px' }}>
          <PlotlyChart data={pieData} layout={pieLayout} />
        </div>
        <div style={{ width: '100%', height: '400px' }}>
          <PlotlyChart data={bubbleData} layout={bubbleLayout} />
        </div>
        <div style={{ width: '100%', height: '400px' }}>
          <PlotlyChart data={areaData} layout={areaLayout} />
        </div>
        <div style={{ width: '100%', height: '400px' }}>
          <PlotlyChart data={radarData} layout={radarLayout} />
        </div>
      </div>
    </div>
  );
};

export default App;
