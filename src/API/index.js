export const BASE_URL = 'https://climacell-microweather-v1.p.rapidapi.com'
export const KEY = 'f1077fc348mshb3be5982aabc937p1a38a7jsn5df5d5db6842'

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${KEY}`,
		'X-RapidAPI-Host': 'climacell-microweather-v1.p.rapidapi.com'
	}
};

fetch(`${BASE_URL}/weather/forecast/hourly?lat=42.8237618&lon=-71.2216286&fields=precipitation`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// Short Term Forecast (Nowcast)
export async function getForecast(lat, lon, fields) {
    try {
        const response = await fetch(`${BASE_URL}/weather/nowcast?lon=${lon}&lat=${lat}&fields=${fields}`, options)
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

// Hourly Forecast
export async function getHourlyForecast(lat, lon, fields) {
    try {
        const response = await fetch(`${BASE_URL}/weather/forecast/hourly?lat=${lat}&lon=${lon}&fields=${fields}`, options)
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

// Realtime
export async function getCurrentWeather(lat, lon, fields) {
    try {
        const response = await fetch(`${BASE_URL}/weather/realtime?lat=${lat}&lon=${lon}&fields=${fields}`, options)
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}