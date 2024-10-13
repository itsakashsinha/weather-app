import { useState } from "react";
import Searchbox from './components/SearchBox';
import WeatherDisplay from './components/WeatherDisplay';
import LoaderComponent from "./components/LoaderComponent";
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const API_KEY  = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const fetchWeather = async (city) => {
    setError(null)
    setLoading(true)
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      if (!response.ok) {
        throw new Error("Error fetching weather data :(");
      }
      const data = await response.json();

      if (data.cod === '404') {
        setError("Couldn't found :(")
        setWeatherData(null)
      } else {
        setWeatherData(data);
        console.log(data)
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred")
    } finally {
      setInterval(() => {
        setLoading(false)
      }, 1000);
    }
  };

  return (
    <div className="App">
      <h2 align='center' id="heading">Weather App</h2>
      <Searchbox onSearch={fetchWeather} />

      {loading && <LoaderComponent/> }
      {!loading && !error && weatherData && <WeatherDisplay data={weatherData} />}
      {!loading && error && <h3 align="center">{error}</h3>}
    </div>
  );
}


export default App;
