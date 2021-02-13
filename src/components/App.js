import './App.css';
import React from 'react';
import SearchBox from './SearchBox';
import Forecast from './Forecast';

class App extends React.Component {
    render() {
        return (
                <div className="container">
                    <div className="ui">
                        <h1>Weather App</h1>
                        <SearchBox/>
                        <Forecast/>
                    </div>
                </div> 
        )
    }
}

export default App;