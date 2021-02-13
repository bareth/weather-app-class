import './SearchBox.css';
import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className="search-box">
                <form>
                    <label forhtml="location">Enter location for weather information.</label>
                    <input type="text" id="location"></input>
                </form>
            </div>
        )
    }
}

export default SearchBox;