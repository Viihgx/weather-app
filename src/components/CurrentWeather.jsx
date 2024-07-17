import React from 'react';
import PropTypes from 'prop-types';
import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/main.scss';

const iconMap = {
  Clear: <WiDaySunny size={50} />,
  Clouds: <WiCloudy size={50} />,
  Rain: <WiRain size={50} />,
};

const CurrentWeather = ({ weather }) => {
  return (
    <div className="card current-weather">
      <h2>Clima Atual em {weather.name}</h2>
      <div className="d-flex align-items-center justify-content-between">
        {iconMap[weather.weather[0].main]}
        <div>
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Condição: {weather.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default CurrentWeather;
