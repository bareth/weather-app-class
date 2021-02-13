import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className="search-box">
                <form>
                    <label forhtml="location">Enter the location to check the weather</label>
                    <input type="text" id="location"></input>
                </form>
            </div>
        )
    }
}

export default SearchBox;