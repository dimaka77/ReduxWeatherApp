// export function fetchWeather(city) {
// 	const url =  `${ROOT_URL}&q=${city},us`;
// 	const request =  axios.get(url);
// 	return {
// 		type: FETCH_WEATHER,
// 		payload: request
// 	};
// }
import axios from 'axios';
const API_KEY = '982967731cbfe4c44b240ef9a7c06065';
const ROOT_URL =  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
}
