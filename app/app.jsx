import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar/searchbar.jsx';
import { resolve } from 'path';
import Map from './components/maps/map.jsx';
import Info from './components/info.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            geoLocation: ''
        } 

        this.handleSearchBarEvent = this.handleSearchBarEvent.bind(this);
        this.geoLocation = this.geoLocation.bind(this);
        this.renderMap = this.renderMap.bind(this);
    }

    handleSearchBarEvent(e) {
        e.preventDefault();

        let form = e.target;
        let searchValue = form.searchBarInput.value;

        this.setState({
            searchValue: searchValue
        })

        form.searchBarInput.value = '';
    }

    componentDidMount() {
        
        this.geoLocation().then(function(positionData){
            this.setState({
                geoLocation: positionData
            });
        }.bind(this)).catch(function(error){
            console.log(error);
        });

    }

    

    geoLocation() {
        return new Promise(
            function(response,reject){
                if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position){
                        response(position);
                    });
                } else{
                    reject('geolocation not supported');
                }
            }
        )
    }


    renderMap(){
        return (this.state.geoLocation ? <Map
            latitude={this.state.geoLocation.coords.latitude}
            longitude={this.state.geoLocation.coords.longitude}
            search={this.state.searchValue}
            /> : ''
        )
    }

    renderInfo(){
        return ()
    }


    render() {
        return(
            <div>
                <SearchBar 
                    handleSearchBarEvent={this.handleSearchBarEvent}
                />
                <h1>{this.state.searchValue}</h1>
                <h1>{this.state.geoLocation ? this.state.geoLocation.coords.latitude : 'waiting....'}</h1>
                
                {this.renderMap()}

                {this.renderInfo()}
            </div>
        )
    }
}





ReactDOM.render(<App/>, document.getElementById('root'));