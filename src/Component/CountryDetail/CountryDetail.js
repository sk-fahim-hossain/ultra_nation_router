import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams() 
    const [country, setCountry] = useState([])


    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setCountry(data))

    },[countryName])
    
    const countryInfo = country[0];
    // let {name, flags, population, subregion} = countryInfo;
    console.log(countryInfo)

    const countryStyle = {
        borderRadius : '10px',
        border : '1px solid blue',
        margin : '20px',
        padding : '20px',
        backgroundColor : 'skyblue',
        textAlign : 'center'
    }
    return (
        <div style={countryStyle}>
            <Link to='/'>← All Country</Link>
           {(country.length) &&<div>
             {/* <h2>{countryName}</h2>  */}
             <h3>{countryInfo.name.common}</h3>
            <img src={countryInfo.flags.png} alt="" srcset="" />
            <h4>POPULATION:<i>{countryInfo.population}</i></h4>
            <p>START OF THE WEEK :{countryInfo.startOfWeek}</p>
            <small>SUB-REGION:<b>{countryInfo.subregion}</b></small>   

           </div>}

        </div>
    );
};

export default CountryDetail;