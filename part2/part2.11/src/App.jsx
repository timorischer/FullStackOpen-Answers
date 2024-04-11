import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Search from './components/Search'
import Person from './components/Person'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])


  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newPerson)) {
      alert(`${newPerson} already added to the phonebook`);
    } 
    else {
      const personObject = {
        id: persons.length + 1,
        name: newPerson,
        number: newNumber,
      }
      setPersons(persons.concat(personObject))
      setNewPerson('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log('Searching for:', event.target.value)
    setSearch(event.target.value)
  }

  const personsToShow = search
  ? persons.filter((person) => 
    person.name.toUpperCase().includes(search.toUpperCase()))
  : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        addPerson={addPerson}
        newPerson={newPerson}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <h2>Numbers</h2>
      <Person 
        personsToShow={personsToShow}
      />
    </div>
  )
}

export default App