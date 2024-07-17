import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/main.scss';

const CurrentWeather = ({ weather }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div className="card current-weather">
      <h2>Clima Atual em {weather.name}</h2>
      <div className="d-flex flex-column align-items-center">
        <img src={iconUrl} alt="Weather Icon" style={{ width: '100px', height: '100px' }} />
        <div>
          <p className="display-4">{Math.round(weather.main.temp)}°C</p>
          <p>{weather.weather[0].description}</p>
          <p>{weather.name}, {weather.sys.country}</p>
          <p>{new Date().toLocaleString('pt-BR')}</p>
        </div>
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default CurrentWeather;
