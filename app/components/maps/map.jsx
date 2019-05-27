import React, {Component} from 'react';
import LoadGoogleMapsApi from 'load-google-maps-api';
import PropTypes from 'prop-types';
import api from '../../../apikeys';
import { debug } from 'util';


const mapOption = {
    key: api.google.key,
    libraries: ['places']
}

const renderMap = (options,props) => {
    LoadGoogleMapsApi(options).then((googleMaps)=>{
        const gymMap = new googleMaps.Map(document.querySelector('#map'), {
            center: {
              lat: props.latitude,
              lng: props.longitude
            },
            zoom: 13
        })

        const marker = new googleMaps.Marker({
            position: {
                lat: props.latitude,
                lng: props.longitude
            },
            map: gymMap,
            title: 'location'
        
        });

        let service = new googleMaps.places.PlacesService(gymMap)

        let request = {
            query: props.search,
            location : {
                lat: props.latitude,
                lng: props.longitude
              },
            radius: '100'
        }
        let callBack = (dataRecieved, dataStatus) => {
            for(let data of dataRecieved) {
                // console.log(data.photos[0].getUrl());
                // console.log(data)
                data.opening_hours.open_now ? new googleMaps.Marker({
                    position: {
                        lat: data.geometry.location.lat(),
                        lng: data.geometry.location.lng()
                    },
                    map: gymMap,
                    title: data.name
                
                }) : null;
            }
        }
        service.textSearch(request, callBack) 
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