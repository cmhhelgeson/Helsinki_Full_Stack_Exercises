const Weather = ({weather}) => {
  return (
    <div className="weather">
      <h3>{weather.location.name}'s Weather</h3>
      <span>
        <b>Temperature: </b>
        {weather.current.temperature} Celcius
      </span>
      <div>
        <img src={weather.current.weather_icons[0]} alt="Weather icons" width="100" height="100" />
      </div>
      <span>
        <b>Wind: </b>
        {weather.current.wind_speed} kph direction {weather.current.wind_dir}
      </span> 
    </div>
  )
}
export default Weather;