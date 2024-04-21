import Container from "./Container";
import { useEffect, useState } from "react";

const Body = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    fetchWeatherDataForDefaultCities();
  }, []);

  const fetchWeatherDataForDefaultCities = async () => {
    const cities = ["Kathmandu", "London", "New York", "Tokyo", "Delhi"];
    const weatherDataForCities = {};
    for (const city of cities) {
      const response = await fetch(process.env.REACT_APP_API + city);
      const json = await response.json();

      const cityWeatherData = {
        icon: json.current.condition.icon,
        tempCelsius: json.current.temp_c,
        cloud: json.current.cloud,
        feelsLikeCelsius: json.current.feelslike_c,
      };
      weatherDataForCities[city] = cityWeatherData;
    }
    setWeatherData(weatherDataForCities);
  };

  return (
    <div className="Body dark:bg-black">
      <div className="weather-containers">
        {Object.keys(weatherData).map((city) => (
          <Container
            key={city}
            cityName={city}
            icon={weatherData[city].icon}
            tempCelsius={weatherData[city].tempCelsius}
            cloud={weatherData[city].cloud}
            feelsLikeCelsius={weatherData[city].feelsLikeCelsius}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
