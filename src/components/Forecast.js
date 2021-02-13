import React from 'react';
import defaultImage from '../images/400x300.gif'

const Forecast = () => {
    return (
        <div className="card">
            <img className="card-image" alt="day or night time image" src={defaultImage}/>
            <div className="card-details">
                <div>CITY</div>
                <div>WEATHER CONDITIONS</div>
                <div>TEMP</div>
            </div>
        </div>
    )
}

export default Forecast;