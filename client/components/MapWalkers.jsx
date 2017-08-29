import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux'

import {receiveOwnersRequest, receiveWalkRequest} from '../actions/owners'




class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      DogToShowId: undefined
    }
    console.log(props.google)
  }
  componentDidMount() {
    this.props.dispatch(receiveOwnersRequest())
    this.props.dispatch(receiveWalkRequest())
  }

  render() {
    const { owners } = this.props
    console.log('owners', owners);
    const {DogToShowId} = this.state
    const dog = this.props.dogs.find((dog) => dog.id == DogToShowId )
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
          {this.props.dogs.map((dog, k) => {
            if (dog.lat && dog.lng) {
              let handleClick = () => {
                this.setState({DogToShowId: dog.id})
              }
              return <Marker key={k} onClick={handleClick} title={dog.dog_name}  position={{
                  lat: Number(dog.lat),
                  lng: Number(dog.lng)
                }}/>
            }
          })}
          {DogToShowId &&  <p title={dog.name}>Dog Name:{dog.dog_name}| Dog breed:{dog.breed}| Dog owner:{dog.owner_name} | Address:{dog.address}| Phone:{dog.phone}<a href=''>Walk this dog</a> </p>
           }
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
    dogs: state.dogs,
    owners: state.owners
  }
}
export default connect(mapStateToProps)(WrappedComponent)
// https://github.com/fullstackreact/google-maps-react/blob/master/README.md
