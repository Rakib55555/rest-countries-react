import React, { useEffect, useState } from 'react';
import Country from '../Country/Country'
import './Countries.css'
const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR3B5oJnR28srhNqSE3fzBhvJHr1cRTPJ-XPURxwUKlILHL9VsLOf5SD33E')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className="container">
            <h1>Countries: {countries.length}</h1>
            <div className="countries-container">
                {
                countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;