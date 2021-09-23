import React from 'react';
import'./Country.css'
const Country = (props) => {
    const {name, flag, capital, nativeName, region, population} = props.country;
    console.log(props.country)
    return (
        <div className="country">
            <h3>Country Name: {name}</h3>
            <img src={flag} alt="" />
            <h4>Capital: {capital}</h4>
            <h5>Native Name: {nativeName}</h5>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;