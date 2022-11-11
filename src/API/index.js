export const BASE_URL = 'https://api.openweathermap.org/data/2.5'
export const KEY = '0cce63ace2ee37502397fdf44a8d86a2'

// Get the CURRENT weather
export const getCurrentWeather = async (city, key) => {
    const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();
    return data
};