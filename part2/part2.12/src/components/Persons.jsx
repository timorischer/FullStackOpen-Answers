const Persons = ({ personsToShow }) => {
    return(
        <>
            <h2>
                Persons
            </h2>
            {personsToShow.map(person => <p key={person.id}>{person.name}: {person.number}</p>)}
        </>
    )
}

export default Persons