import './Forecast.css';
import React from 'react';
import Image from './Image';


class Forecast extends React.Component {
    state = {
        IsDayTime: null,
        city: 'CITY',
        weather: 'WEATHER CONDITIONS',
        temp: 'TEMP'
    }

    componentDidUpdate(prevProps) {
        if(this.props.cityWeather !== prevProps.cityWeather) {
            this.setState({
                IsDayTime: this.props.cityWeather.IsDayTime,
                city: this.props.cityDet.LocalizedName,
                weather: this.props.cityWeather.WeatherText,
                temp: this.props.cityWeather.Temperature.Metric.Value
            })
        }
    }

    render() {
        const {IsDayTime,city,weather,temp} = this.state;
        return (
            <div className="card">
                <Image IsDayTime={IsDayTime}/>
                <div className="card-details">
                    <div className="city">{city}</div>
                    <div className="weather">{weather}</div>
                    <div className="temp"><span>{temp}</span> &deg;C</div>
                </div>
            </div>
        )
    }
    
}

export default Forecast;