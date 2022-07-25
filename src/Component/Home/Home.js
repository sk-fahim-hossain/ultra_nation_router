import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Country from '../Country/Country';


const Home = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
            {/* <div>
                <input type="text" name="" id="" />
                <button type="submit">search</button>
            </div> */}
            {
                country.map(country =><Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;