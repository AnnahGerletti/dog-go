import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux'
import {receiveOwnersRequest} from '../actions/owners'

class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.google)
  }
  componentDidMount() {
    this.props.dispatch(receiveOwnersRequest())
  }
  render() {
    return (
      <div>
        <h2>map</h2>
        <Map google={this.props.google} style={{
          width: '45%',
          height: '45%',
          position: 'relative',
          margin: '0 auto'}}
          className={'map'} zoom={13} fullscreenControl={true} containerStyle={{}} initialCenter={{
          lat: -41.2865,
          lng: 174.7762
        }}>
          {this.props.dogs.map((dog) => {
            if (dog.lat && dog.lng) {
              return <Marker title={dog.dog_name} name={'place.place'} position={{
                  lat: Number(dog.lat),
                  lng: Number(dog.lng)
                }}/>
            }
          })}
        </Map>
      </div>
    );
  }
}

const WrappedComponent = GoogleApiWrapper({
  apiKey: "AIzaSyBtks1ielOp7wqVyIJNevVW-8SrmpSf8Pk"
})(MapContainer)

function mapStateToProps(state) {
  return {
    dogs: state.dogs
  }
}
export default connect(mapStateToProps)(WrappedComponent)
// https://github.com/fullstackreact/google-maps-react/blob/master/README.md
