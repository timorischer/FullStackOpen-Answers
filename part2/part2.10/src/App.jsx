import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Search from './components/Search'
import Person from './components/Person'


const App = (props) => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

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