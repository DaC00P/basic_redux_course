import Axios from 'axios';

const WEATHER_API_KEY = '241beb2d33458cdd4712f07ae9979f17';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${rootUrl}&q=${city},us`;

  let request = Axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
