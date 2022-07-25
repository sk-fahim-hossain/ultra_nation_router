import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name,region,flags} = props.country;
    // console.log(props.country)

    const countryStyle= {
        textAlign: 'center',
        margin:'20px',
        padding: '20px',
        border: '1px solid blue',
        borderRadius: '10px',
        backgroundColor:'skyblue'
    }
    return (
       
        
        <div style={countryStyle}>
            <h2>{name.official}</h2>
            <img style={{width:'100px'}}src={flags.png} alt="" />
            <br />
            <p>Region:{region}</p>
            
            <Link to={`/country/${name.common}`}>show more about {name.common}</Link>
        </div>
      
    );
};

export default Country;