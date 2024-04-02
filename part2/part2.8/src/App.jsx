import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      name: newName,
      number: newNumber
      }
    if (
      persons.find((person) => person.name === nameObject.name)) {
        alert(`${newName} is already added to the phonebook`)
      } 
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
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
      <h2>Numbers</h2>
      <div>{persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}</div>
    </div>
  )
}

export default App