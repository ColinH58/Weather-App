const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const KEY = "0cce63ace2ee37502397fdf44a8d86a2";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: KEY });
  return fetch(url)
    .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
  const {
    coord: {lat, lon},
    main: {temp, feels_like, temp_min, temp_max, humidity},
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,
    wind: {speed}
  } = data
  const {main: details, icon} = weather[0]
  return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData("weather", searchParams).then(formatCurrentWeather)
  return formattedCurrentWeather
}

export default getFormattedWeatherData;