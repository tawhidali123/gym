import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar/searchbar.jsx';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''

        } 

    }

    handleSearchBarEvent(e) {
        e.preventDefault();

        let form= e.target;
        let searchValue = form.searchBarInput.value;

        this.setState({
            searchValue: searchValue
        })
    }

    render() {
        return(
            <div>
                <SearchBar 
                    handleSearchBarEvent={this.handleSearchBarEvent.bind(this)}
                />
                <h1>{this.state.searchValue}</h1>
    
            </div>
        )
    }
}





ReactDOM.render(<App/>, document.getElementById('root'));