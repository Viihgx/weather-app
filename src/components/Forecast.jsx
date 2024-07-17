import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/main.scss';

const Forecast = ({ forecast }) => {
  return (
    <div className="card forecast">
      <h2>Previsão de 3 Horas</h2>
      <div className="row">
        {forecast.list.slice(0, 8).map((item, index) => (
          <div className="col-md-3" key={index}>
            <div className="forecast-item card">
              <p>{new Date(item.dt * 1000).toLocaleTimeString('pt-BR')}</p>
              <p>Temp: {item.main.temp}°C</p>
              <p>{item.weather[0].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default Forecast;
