const Button = ({ country, chooseSelection }) => {
    
    const showCountry = (event) => {
        event.preventDefault()
        chooseSelection(country)
    }

    return (
        <button key={country.cca3} onClick={showCountry}>show</button>
    )
}

export default Button