import React from 'react';
import defaultImage from '../images/400x300.gif';
import day from '../images/day.svg';
import night from '../images/night.svg';

const Image = ({IsDayTime}) => {
    const IsTime = () => {
        if(IsDayTime === true){
            return day;
        } else if (IsDayTime === false) {
            return night;
        } else {
            return defaultImage;
        }
    }
    
    return <img className="card-image" alt="day time image" src={IsTime()}/>
}

export default Image;