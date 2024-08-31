import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';



const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selection, setSelection] = useState([])
  const [text, setText] = useState('Type your search criteria...')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    console.log(event.target.value);
  }

  const handleSearch = (event) => {
    event.preventDefault()
    console.log('Input: ', event.target)
    const result = countries.filter((country) => country.name.common.toUpperCase().includes(search.toUpperCase()))
    console.log(result)
    if (result.length === 0) {
      setText('No matching countries found')
    }
    else if (result.length > 10) {
      setText('Too many matches, refine search criteria')
    }
    else {
      setSelection(result)
      setText('Results:')
      console.log(result)
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        Search countries:
        <input value={search} onChange={handleSearchChange}></input>
        <button type="submit">Search</button>
      </form>
      <Countries
        selection={selection}
        text={text}
      />
    </div>
  );
};

export default App;