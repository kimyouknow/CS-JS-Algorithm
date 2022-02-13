import axios from 'axios';
const API_Key = 'a7feb8288051686aa7a4332851e0a2dc';

export function getWeatherAPI() {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&APPID=${API_Key}`
  );
}
