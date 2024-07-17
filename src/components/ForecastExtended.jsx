import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ForecastExtended = ({ forecast }) => {
  // Filtra os dados da previsão para pegar apenas um por dia (cada 8 intervalos de 3 horas)
  const today = new Date().getDate();
  const extendedForecast = [];
  const dates = new Set();

  for (const item of forecast.list) {
    const itemDate = new Date(item.dt * 1000);
    const date = itemDate.getDate();

    // Ignorar previsões para o dia atual
    if (date === today) continue;

    // Adicionar previsão para um novo dia
    if (!dates.has(date)) {
      dates.add(date);
      extendedForecast.push(item);
    }

    // Parar quando tivermos 7 dias de previsão
    if (extendedForecast.length >= 8) break;
  }

  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>Previsão para os Próximos 5 Dias</Card.Title>
        {extendedForecast.map((item, index) => (
          <div key={index} className="forecast-extended-item">
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            <div className="temperature">
              {Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C
            </div>
            <div className="date">
              {new Date(item.dt * 1000).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' })}
            </div>
            <div className="day">
              {new Date(item.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short' })}
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

ForecastExtended.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastExtended;
