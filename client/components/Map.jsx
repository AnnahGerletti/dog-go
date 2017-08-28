import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.google)
  }
  render() {
    return (
      <div>
        <Map google={this.props.google} style={{
          width: '45%',
          height: '45%',
          position: 'relative',
          margin: '0 auto'
        }} className={'map'} zoom={13} fullscreenControl={true} containerStyle={{}} initialCenter={{
          lat: -41.2865,
          lng: 174.7762
        }}>

          <Marker title={'place.place'} name={'place.place'} position={{
            lat: -41.2865,
            lng: 174.7762
          }}/>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBtks1ielOp7wqVyIJNevVW-8SrmpSf8Pk"
})(MapContainer)

// https://github.com/fullstackreact/google-maps-react/blob/master/README.md
