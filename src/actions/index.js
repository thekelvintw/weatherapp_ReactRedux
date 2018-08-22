import axios from 'axios';


const API_KEY = '42b9ba7010c97c87c83c50e2250be80b';
const ROOT_Url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` 

export const FETCH_WEATHER = 'FETCH_WEATHER'
// to avoid trype err

export function fetchWeather(city) {
	const url = `${ROOT_Url}&q=${city},us`;
	const request = axios.get(url);
	// use libarary to create a get request
	console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
