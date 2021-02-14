import './Forecast.css';
import React from 'react';
import defaultImage from '../images/400x300.gif'

const Forecast = (props) => {
    console.log(props);
    return (
        <div className="card">
             <img className="card-image" alt="day or night time image" src={defaultImage}/>
            <div className="card-details">
                <div className="city">CITY</div>
                <div className="weather">WEATHER CONDITIONS</div>
                <div className="temp"><span>TEMP</span> &deg;C</div>
            </div>
        </div>
    )
}

export default Forecast;