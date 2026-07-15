const CountryList = ({ countries, setFilter }) => (
  <div>
    {countries.map(country =>
      <div key={country.cca3}>
        {country.name.common}
        <button onClick={() => setFilter(country.name.common)}>show</button>
      </div>
    )}
  </div>
)

export default CountryList
