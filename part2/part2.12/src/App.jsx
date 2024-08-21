import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  console.log('rendering', persons.length, 'persons')

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    if (persons.find((person) => person.name.toUpperCase() === newName.toUpperCase())) {
      alert(`${newName} is already in the phonebook`)
    }
    else if (newNumber.length <= 5) {
      alert(`${newNumber} is too short for a phone number`)
    }

    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          console.log(response)
        })
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log('searching for: ', event.target.value)
    setFilter(event.target.value)
  }

  const personsToShow = filter
  ? persons.filter((person) =>
    person.name.toUpperCase().includes(filter.toUpperCase()))
  : persons;

  return (
    <>
      <h1>Phonebook</h1>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} 
      />
      <Persons 
          personsToShow={personsToShow}
      />
      <Filter 
        filter={filter} 
        handleFilterChange={handleFilterChange}
      />
    </>
  )
}

export default App