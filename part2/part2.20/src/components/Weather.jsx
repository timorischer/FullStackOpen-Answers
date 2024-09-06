import axios from "axios"
import { useState, useEffect } from "react"



const Weather = ({ country }) => {
    const [here, setHere] = useState([])
    const api_key = import.meta.env.VITE_SOME_KEY
    const capital = Object.values(country.capital)
    const latLng = country.capitalInfo.latlng
    const [lat, lng] = latLng


    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`)
            .then(response => {
                setHere(response.data);
                console.log('response: ', response.data)
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }, [lat, lng]);

    return (
        <>
            <h2>Weather in {capital}</h2>
            <p>temperature: {here.main?.temp}°C</p>
            <img src={`https://openweathermap.org/img/wn/${here.weather?.[0]?.icon}.png`} alt={`Weather icon ${here.weather?.[0]?.description}`} width="100" />
            <p>wind: {here.wind?.speed} m/s</p>
        </>
    )
}

export default Weather