import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [msgType, setMsgType] = useState('success')

  //loads initial person array from server
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  //event handler for add button
  const addPerson = (event) => {
    event.preventDefault()

    if (newName.length === 0) {
      alert(`Please enter a name`)
    }

    else if (newNumber.length === 0) {
      alert(`Please enter a phone number`)
    }
    
    //scans length of number in text field, alerts if number tooo short
    else if (newNumber.length <= 5) {
      setMsgType('error')
      setMessage(`${newNumber} is too short for a phone number`)
      setTimeout(() => {
        setMessage(null)
        setMsgType('success')
      }, 5000)
    }

    //check if person in text field already exists
    else if (persons.find((person) => person.name.toUpperCase() === newName.toUpperCase())) {
      const samePerson = persons.find((person) => person.name.toUpperCase() === newName.toUpperCase())
        const updatedPerson = { ...samePerson, number: newNumber}
        setMessage(`Successfully updated ${samePerson.name}'s phone number to ${newNumber}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        personService
          .replace(samePerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== samePerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setMsgType('error')
            setMessage(`Information of ${newName} has already been removed from server`)
            setTimeout(() => {
              setMessage(null)
              setMsgType('success')
            }, 5000)
          })
    }

    //creates personObject from text fields, assigns id automatically and adds it to the server
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setMessage(`Successfully saved ${personObject.name} to the phonebook`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  //event handler for remove button
  const removePersonNr = (id) => {
    const removedPerson = persons.find((person) => person.id === id)
      console.log(`Person ${id} was removed`)
      setMessage(`Successfully removed ${removedPerson.name} from the phonebook`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      personService
        .remove(id)
        .then(setPersons(persons.filter((person) =>
          person.id !== id)))
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
      <Notification 
        message={message} 
        msgType={msgType}
      />
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
            removePerson={() => removePersonNr(person.id)}
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