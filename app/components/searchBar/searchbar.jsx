import React, { Component } from 'react';

let SearchBar = (props) => (
    <div className="searchBar">
    <label>
        <form name="searchBarForm" onSubmit={props.handleSearchBarEvent}>
            <input name="searchBarInput" type="input"/>
        </form>
    </label>
    <button type="submit">search</button>
    </div>
)


export default SearchBar;