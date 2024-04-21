import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "./Container";

const City = () => {
  const [weatherData, setWeatherData] = useState({});
  const { cityName } = useParams();

  useEffect(() => {
    fetchWeather();
  }, [cityName]);

  const fetchWeather = async () => {
    try {
      const data = await fetch(process.env.REACT_APP_API + cityName);
      const json = await data.json();
      setWeatherData(json);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="dark:bg-black">
      {weatherData && (
        <Container
          key={cityName}
          cityName={weatherData?.location?.name}
          icon={weatherData?.current?.condition?.icon}
          tempCelsius={weatherData?.current?.temp_c}
          cloud={weatherData?.current?.cloud}
          feelsLikeCelsius={weatherData?.current?.feelslike_c}
        />
      )}
    </div>
  );
};

export default City;
