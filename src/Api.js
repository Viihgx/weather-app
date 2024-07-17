import axios from 'axios';

const API_KEY = 'ca6fa9dd6e261f980c0fe55b775d6f1c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = (city) => {
  return axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'pt_br'
    }
  });
};

export const getForecast = (city) => {
  return axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'pt_br'
    }
  });
};
