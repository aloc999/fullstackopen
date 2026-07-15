import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)
  const api_key = import.meta.env.VITE_OPENWEATHER_API_KEY

  useEffect(() => {
    if (api_key) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api_key}`)
        .then(response => {
          setWeather(response.data)
        })
    }
  }, [capital, api_key])

  if (!weather) {
    return null
  }

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <div>temperature {weather.main.temp} Celsius</div>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <div>wind {weather.wind.speed} m/s</div>
    </div>
  )
}

const Country = ({ country }) => {
  const capital = country.capital ? country.capital[0] : ''

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {capital}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map(lang =>
          <li key={lang}>{lang}</li>
        )}
      </ul>
      <img
        src={country.flags.png}
        alt={`flag of ${country.name.common}`}
        width="150"
      />
      <Weather capital={capital} />
    </div>
  )
}

export default Country
