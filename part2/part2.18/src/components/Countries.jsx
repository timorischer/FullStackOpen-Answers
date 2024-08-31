const Countries = ({ selection, text }) => {
    if (text === 'No matching countries found' || text === 'Too many matches, refine search criteria') {
        return (
            <>
                <p>{text}</p>
            </>
        )
    }

    else if (selection.length === 1) {
        const country = selection[0]
        const languages = Object.values(country.languages)
        console.log(languages);


        return (
            <>
                <h2>{country.name.common}</h2>
                <p>
                    Capital: {country.capital}<br />
                    Area: {country.area}
                </p>
                <h4>Languages:</h4>
                <ul>
                    {languages.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
                <p><img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="200" /></p>
            </>
        )
    }

    return (
        <>
            <p>{text}</p>
            {selection.map((country) => (
                <p key={country.cca3}>{country.name.common}</p>
            ))}
        </>
    )
}

export default Countries