import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");

  const API_KEY = "bd5e378503939ddaee76f12ad7a97608";

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h2>Check the Weather</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {weather && (
          <div className="weather-details">
            <h3>{weather.name}, {weather.sys.country}</h3>
            <div className="metrics-grid">
              <div className="metric">
                <span>🌡️ Temperature</span>
                <span>{weather.main.temp}°C</span>
              </div>
              <div className="metric">
                <span>🌤️ Weather</span>
                <span>{weather.weather[0].description}</span>
              </div>
              <div className="metric">
                <span>💧 Humidity</span>
                <span>{weather.main.humidity}%</span>
              </div>
              <div className="metric">
                <span>🌬️ Wind Speed</span>
                <span>{weather.wind.speed} m/s</span>
              </div>
              <div className="metric">
                <span>🧭 Wind Direction</span>
                <span>{weather.wind.deg}°</span>
              </div>
              <div className="metric">
                <span>☁️ Cloudiness</span>
                <span>{weather.clouds.all}%</span>
              </div>
              <div className="metric">
                <span>🌅 Sunrise</span>
                <span>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</span>
              </div>
              <div className="metric">
                <span>🌇 Sunset</span>
                <span>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</span>
              </div>
              <div className="metric">
                <span>📏 Visibility</span>
                <span>{weather.visibility / 1000} km</span>
              </div>
              <div className="metric">
                <span>📊 Pressure</span>
                <span>{weather.main.pressure} hPa</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;