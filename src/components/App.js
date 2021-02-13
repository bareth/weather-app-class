import './App.css';
import React from 'react';
import accu from '../api/accu';
import SearchBox from './SearchBox';
import Forecast from './Forecast';

class App extends React.Component {
    onSearchSubmit = (searchInput) => {
        console.log(searchInput);
    }

    render() {
        return (
            <div className="container">
                <h1>Weather App</h1>
                <SearchBox onSearchSubmit={this.onSearchSubmit}/>
                <Forecast/>
            </div> 
        )
    }
}

export default App;