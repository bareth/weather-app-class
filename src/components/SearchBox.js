import './SearchBox.css';
import React from 'react';

class SearchBox extends React.Component {
    state = { searchInput: ''};

    onInputSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchInput);
    }
    
    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.onInputSubmit}>
                    <label forhtml="location">Enter location for weather information.</label>
                    <input 
                        type="text" 
                        value={this.state.searchInput} 
                        onChange={e => this.setState({searchInput:e.target.value})} 
                        id="location"></input>
                </form>
            </div>
        )
    }
}

export default SearchBox;