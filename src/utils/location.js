import React from 'react';
import UserInput from '../components/user-input.js';
import {geolocated} from 'react-geolocated';
 var Geohash = require('latlon-geohash');
 var geohash = require('ngeohash');


class Location extends React.Component {
  render() {
  	if (!this.props.isGeolocationAvailable) {
       console.log("Your browser does not support Geolocation")}
      if (!this.props.isGeolocationEnabled)
        {console.log("Geolocation is not enabled")
}
    
    return (
    	<UserInput hash={this.props.coords && geohash.encode(this.props.coords.latitude,this.props.coords.longitude)}/>
              
          )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Location);

