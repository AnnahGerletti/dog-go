import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapContainer extends React.Component {
  constructor (props) {
    super(props)
    console.log(props.google)

  }
  render() {
    return (
      <Map google={this.props.google}
        style={{width: '95%', height: '85%', position: 'relative', margin: '10px'}}
        className={'map'}
        zoom={6}
        initialCenter={{
            lat: -36.8547512,
            lng: 174.7787425
          }}
          >
    </Map>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: ("AIzaSyBtks1ielOp7wqVy`IJNevVW-8SrmpSf8Pk")
})(MapContainer)

// https://github.com/fullstackreact/google-maps-react/blob/master/README.md
