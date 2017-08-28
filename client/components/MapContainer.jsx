import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// ...

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={8}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Place name</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDt0xtdu6doEhBFDxPWWe05nFuJxEsA6wQ')
})(MapContainer)
