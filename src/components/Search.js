import React from "react";

const Search = ({location, setLocation, searchLocation}) => {
    return (
        <div className="search">
            <input
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter Location'
                type="text"
            />
        </div>
    );
}

export default Search;
