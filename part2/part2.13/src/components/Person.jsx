const Persons = ({ person, removePerson }) => {

    return(
        <li>
            {person.name} : {person.number}
        </li>
    )
}

export default Persons