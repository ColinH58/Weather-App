export const BASE_URL = 'http://api.openweathermap.org'
export const KEY = '0cce63ace2ee37502397fdf44a8d86a2'

// Get the CURRENT weather
export const getCurrentWeather = async (lat, lon) => {
    const response = await fetch(`${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();
    return data
};