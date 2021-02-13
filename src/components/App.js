import React from 'react';
import SearchBox from './SearchBox';
import Forecast from './Forecast';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h4>Weaather App</h4>
                    <SearchBox/>
                    <Forecast/>
                </div>
            </div> 
        )
    }
}

export default App;