const Container = ({
  cityName,
  icon,
  tempCelsius,
  cloud,
  feelsLikeCelsius,
}) => {
  return (
    <div className="weathercards  dark:bg-black dark:border dark:border-white dark:text-white">
      <div className="container">
        <img src={icon} alt="Weather Icon" />
        <h3>{cityName}</h3>
        <h4>Temperature: {tempCelsius}°C</h4>
        <h4>Cloud Coverage: {cloud}%</h4>
        <h4>Feels Like: {feelsLikeCelsius}°C</h4>
      </div>
    </div>
  );
};

export default Container;
