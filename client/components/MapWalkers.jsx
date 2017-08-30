import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux'

import {receiveOwnersRequest, receiveWalkRequest} from '../actions/owners'




class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ownerToShowId: undefined
    }
    console.log(props.google)
  }
  componentDidMount() {
    this.props.dispatch(receiveOwnersRequest())
    this.props.dispatch(receiveWalkRequest())
  }

  render() {
  const {DogToShowId} = this.state
  const dog = this.props.dogs.find((dog) => dog.id == DogToShowId )
  return (
    <div>
      <h2>Click on a dog to walk!</h2>
      <Map google={this.props.google} style={{
        width: '90%',
        height: '400px',
        position: 'relative',
        margin: '0 auto'}}
        className={'map'} zoom={13} fullscreenControl={true}
        initialCenter={{
        lat: -41.2865,
        lng: 174.7762
      }}>
        {this.props.dogs.map((dog, k) => {
          if (dog.lat && dog.lng) {
            let handleClick = () => {
              this.setState({DogToShowId: dog.id})
            }
            return <Marker key={k} onClick={handleClick} title={dog.dog_name}


              position={{
                lat: Number(dog.lat),
                lng: Number(dog.lng)
              }}/>
          }
        })}
        {dog &&  <p className="requestCon"title={dog.dog_name}><strong>Dog Name: </strong> {dog.dog_name} <br/><strong>Dog owner:</strong> {dog.owner_name} <br/><strong>Dog breed:</strong> {dog.breed}<br/><strong>Address: </strong>{dog.address} <br/><strong> Phone: </strong>{dog.phone}<br/><br/><a className="accept" href="/">Accept Request.</a></p>
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
    dogs: state.owners
  }
}
export default connect(mapStateToProps)(WrappedComponent)
// https://github.com/fullstackreact/google-maps-react/blob/master/README.md
