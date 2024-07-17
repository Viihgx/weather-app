import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/main.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ForecastChart = ({ forecast }) => {
  const data = {
    labels: forecast.list.slice(0, 8).map(item => new Date(item.dt * 1000).toLocaleTimeString('pt-BR')),
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: forecast.list.slice(0, 8).map(item => item.main.temp),
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="card forecast-chart">
      <h2>Gráfico de Temperatura</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

ForecastChart.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastChart;
