import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/main.scss';

const ForecastExtended = ({ forecast }) => {
  const dailyForecasts = forecast.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 7);

  return (
    <div className="card forecast-extended">
      <h2>Previsão para os Próximos 7 ou 8 Dias</h2>
      <div className="row">
        {dailyForecasts.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div className="forecast-item card">
              <p>{new Date(item.dt * 1000).toLocaleDateString('pt-BR')}</p>
              <p>Temp: {item.main.temp}°C</p>
              <p>{item.weather[0].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ForecastExtended.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastExtended;
