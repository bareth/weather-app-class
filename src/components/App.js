import './App.css';
import React from 'react';
import accu from '../api/accu';
import SearchBox from './SearchBox';
import Forecast from './Forecast';

class App extends React.Component {
    state = { 
        cityDet: {},
        cityWeather: {},
    }

    onSearchSubmit = async(searchInput) => {
        const response = await accu.get('locations/v1/cities/search', {
            params: {
                q: searchInput,
            }
        });
        this.setState({
            cityDet:response.data[0]
            });
    }

    fetchData = async(key) => {
        const response = await accu.get(`currentconditions/v1/${key}`);
        this.setState({cityWeather:response.data[0]});
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.state.cityDet !== prevState.cityDet) {
            this.fetchData(this.state.cityDet.Key);
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Weather App</h1>
                <SearchBox onSearchSubmit={this.onSearchSubmit}/>
                <Forecast weather={this.state}/>
            </div> 
        )
    }
}

export default App;