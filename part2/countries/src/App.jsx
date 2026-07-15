import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const matches = countries.filter(c =>
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      {filter === '' ? null :
        matches.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : matches.length > 1 ? (
          <CountryList countries={matches} setFilter={setFilter} />
        ) : matches.length === 1 ? (
          <Country country={matches[0]} />
        ) : (
          <p>No matches found</p>
        )
      }
    </div>
  )
}

export default App
