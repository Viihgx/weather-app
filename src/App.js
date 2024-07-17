import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';
import useWeather from './hooks/useWeather';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import ForecastChart from './components/ForecastChart';
import ForecastExtended from './components/ForecastExtended';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';

const App = () => {
  const {
    city,
    setCity,
    weather,
    forecast,
    loading,
    error,
    fetchWeather,
  } = useWeather();

  return (
    <div className="container app-container">
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className="weather-layout">
        {weather && <CurrentWeather weather={weather} />}
        {forecast && <Forecast forecast={forecast} />}
        {forecast && <ForecastChart forecast={forecast} />}
        {forecast && <ForecastExtended forecast={forecast} />}
      </div>
    </div>
  );
};

export default App;
