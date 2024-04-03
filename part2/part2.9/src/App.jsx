import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (
      persons.find((person) => person.name === newName)) {
        alert(`${newName} is already added to the phonebook`)
      } 
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
      console.log('persons is now:', persons)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange} 
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        <div>
          search: <input
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      <h2>Numbers</h2>
      <div>{personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}</div>
    </div>
  )
}

export default App