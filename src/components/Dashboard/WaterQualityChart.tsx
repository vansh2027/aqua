
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
);

interface WaterQualityChartProps {
  className?: string;
}

const WaterQualityChart = ({ className }: WaterQualityChartProps) => {
  // Sample data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'pH Level',
        data: [7.2, 7.3, 7.1, 7.4, 7.6, 7.5, 7.3, 7.2, 7.0, 7.1, 7.2, 7.3],
        borderColor: 'rgb(14, 165, 233)', // aqua-500
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgb(14, 165, 233)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
      },
      {
        label: 'Dissolved Oxygen (mg/L)',
        data: [8.5, 8.3, 8.2, 8.0, 7.8, 7.5, 7.2, 7.1, 7.3, 7.6, 7.9, 8.2],
        borderColor: 'rgb(56, 189, 248)', // aqua-400
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgb(56, 189, 248)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#0c4a6e',
        bodyColor: '#0c4a6e',
        borderColor: 'rgba(14, 165, 233, 0.3)',
        borderWidth: 1,
        cornerRadius: 8,
        bodyFont: {
          family: "'Inter', sans-serif",
        },
        titleFont: {
          family: "'Inter', sans-serif",
          weight: 'bold',
        },
        padding: 12,
        boxPadding: 4,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11,
          },
        },
      },
      y: {
        beginAtZero: false,
        border: {
          display: false,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.06)',
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11,
          },
          padding: 10,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className={`glass-card p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Water Quality Trends</h3>
      <div className="w-full h-[300px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default WaterQualityChart;
