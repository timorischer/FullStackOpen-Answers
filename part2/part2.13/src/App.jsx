import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
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
      <ul>
        {personsToShow.map(person =>
          <Person
            key={person.id}
            person={person}
          />
        )}
      </ul>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
    </>
  )
}

export default App