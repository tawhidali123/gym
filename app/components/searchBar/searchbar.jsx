import React, { Component } from 'react';

let SearchBar = (props) => (
    <div className="searchBar">
        <form name="searchBarForm" onSubmit={props.handleSearchBarEvent}>
            <input name="searchBarInput" type="input"/>
            <button type="submit">search</button>
        </form>
    
    </div>
)


export default SearchBar;