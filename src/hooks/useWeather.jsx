import { useState, useEffect, useCallback } from 'react';
import { getWeather, getForecast } from '../Api';

const useWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const weatherResponse = await getWeather(cityName);
      setWeather(weatherResponse.data);

      const forecastResponse = await getForecast(cityName);
      setForecast(forecastResponse.data);
    } catch (error) {
      setError('Erro ao buscar dados do clima');
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = useCallback(async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const geocodeResponse = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=ca6fa9dd6e261f980c0fe55b775d6f1c`);
      const geocodeData = await geocodeResponse.json();
      if (geocodeData.length > 0) {
        const cityName = geocodeData[0].name;
        setCity(cityName);
        fetchWeather(cityName);
      } else {
        setError('Não foi possível obter a cidade a partir das coordenadas');
      }
    } catch (error) {
      setError('Erro ao buscar dados do clima');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
      }, (error) => {
        setError('Erro ao obter localização do usuário');
      });
    } else {
      setError('Geolocalização não suportada pelo navegador');
    }
  }, [fetchWeatherByCoords]);

  return {
    city,
    setCity,
    weather,
    forecast,
    loading,
    error,
    fetchWeather,
  };
};

export default useWeather;
