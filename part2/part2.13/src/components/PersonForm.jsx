const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
        <>
            <form onSubmit={addPerson}>
                <h2>
                    New entry
                </h2>
                <div>
                    Name: <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    Number: <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm