import React, {Component} from 'react';
import LoadGoogleMapsApi from 'load-google-maps-api';
import PropTypes from 'prop-types';

const mapOption = {
    key: 'AIzaSyCAepUklcotyoir7FfV9t0rGWtG1kgwNp8'
}

const renderMap = (options,props) => {
    LoadGoogleMapsApi(options).then((googleMaps)=>{
        new googleMaps.Map(document.querySelector('#map'), {
            center: {
              lat: props.latitude,
              lng: props.longitude
            },
            zoom: 16
        })
    }) 
} 


const Map = (props) => {
    return (
        <React.Fragment>
            <div id='map' style={{height: '400px'}}></div>
            { renderMap(mapOption,props) }
        </React.Fragment>
    )
}


Map.protoType = {
    longitude: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    latitude: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ])
}


export default Map;