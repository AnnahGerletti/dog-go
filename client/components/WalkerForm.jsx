import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { GoogleApiWrapper } from "google-maps-react";

import {postWalkerRequest} from '../actions/register'

class WalkerForm extends React.Component {
  constructor (props){
    super (props)
    this.state={
      newWalker: {
        address: "",
        lat: "",
        lng: ""
      },

      address: "",
      geocodeResults: null,
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.setAddress = (address) => (this.setState({address}))
  }
  handleChange(e) {
    const newWalker = this.state.newWalker
    //console.log(e.target)
    newWalker[e.target.name] = e.target.value
    this.setState({
      newWalker: newWalker
    })
    //console.log(this.state.newWalker)
  }

  handleSelect() {
    let { address } = this.state;
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        let { newWalker } = this.state;
        newWalker["lat"] = lat;
        newWalker["lng"] = lng;
        newWalker["address"] = address;
        this.setState({ newWalker });
      })
      .catch(error => {
        console.log("Oh no!", error);
        this.setState({
          geocodeResults: this.renderGeocodeFailure(error),
          loading: false
        })
      })
  }

  submitWalker(e){
      e.preventDefault()
      this.props.dispatch(postWalkerRequest(this.state.newWalker, () => document.location = '/#/MapWalkers'))
  }
  render (){
    const {name, address, phone, postCode, email} =this.state
    const AutocompleteItem = ({ formattedSuggestion }) =>
        <div className="Demo__suggestion-item">
          <i className="fa fa-map-marker Demo__suggestion-icon" />
          <strong>{formattedSuggestion.mainText}</strong>{" "}
          <small className="text-muted">
            {formattedSuggestion.secondaryText}
          </small>
        </div>

      const inputProps = {
        type: "text",
        value: this.state.address,
        onChange: this.setAddress,
        onBlur: this.handleSelect,
        onFocus: () => {
          console.log("Focused!");
        },
        autoFocus: true,
        placeholder: "Address",
        name: "Demo__input",
        id: "my-input-id"
      }

    return(
      <div>
        <h1>Sign up as a Walker</h1>
        <form className='walkerForm'>
          <p><input name="name" placeholder="name" onChange={this.handleChange} value={name} /></p>
            <p><PlacesAutocomplete
                autocompleteItem={AutocompleteItem}
                inputProps={inputProps}
                googleLogo={false}
                name="address"
              /></p>
          <p><input name="phone" placeholder="phone" onChange={this.handleChange} value={phone} /></p>
          <p><input name="postCode" placeholder="postCode" onChange={this.handleChange} value={postCode} /></p>
          <p><input name="email" placeholder="email" onChange={this.handleChange} value={email} /></p>
          <p><input type="submit" onClick={this.submitWalker.bind(this)}/></p>
        </form>
        <Link to="/register" className="NoLeftButton">Cancel</Link>

      </div>
    )
  }

}
const WrappedComponent = GoogleApiWrapper({
  apiKey: "AIzaSyBtks1ielOp7wqVyIJNevVW-8SrmpSf8Pk"
})(WalkerForm)

export default connect()(WrappedComponent)
