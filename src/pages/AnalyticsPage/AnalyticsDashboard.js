import React from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from 'chart.js';
import './AnalyticsDashboard.css'; 

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const AnalyticsDashboard = () => {
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  
  const pieData = {
    labels: ['Fruit', 'Vegetables', 'Meat', 'Dairy'],
    datasets: [
      {
        data: [300, 150, 100, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED'],
        hoverOffset: 4,
      },
    ],
  };

  
  const barData = {
    labels: ['This Month', 'Last Year Same Month'],
    datasets: [
      {
        label: 'Spending Comparison',
        data: [65, 50],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Grocery Spending',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="analyticsDashboard">
      {/* Top Charts: Pie and Bar */}
      <div className="top-charts-container">
        <div className="chart-tile">
          <h2>Category Spending Breakdown</h2>
          <Pie data={pieData} options={chartOptions} />
        </div>
        <div className="chart-tile">
          <h2>This Month vs Last Year</h2>
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>
      
      {/* Bottom Chart: Line */}
      <div className="chart-tile bottom-chart">
        <h2>Spending Trends Over Time</h2>
        <Line data={lineData} options={chartOptions} />
      </div>
    </div>
  );
}

export default AnalyticsDashboard;