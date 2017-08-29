import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { GoogleApiWrapper } from "google-maps-react";

import {postOwnerRequest} from '../actions/register'

class OwnerForm extends React.Component {
  constructor (props){
    super (props)
    this.state={
      newOwner: {
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
  handleChange(e){
    const newOwner = this.state.newOwner
    newOwner[e.target.name] = e.target.value
    this.setState({
      newOwner: newOwner
    })
  }

  handleSelect() {
    let { address } = this.state;
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        let { newOwner } = this.state;
        newOwner["lat"] = lat;
        newOwner["lng"] = lng;
        newOwner["address"] = address;
        this.setState({ newOwner });
      })
      .catch(error => {
        console.log("Oh no!", error);
        this.setState({
            geocodeResults: this.renderGeocodeFailure(error),
            loading: false
          })
      })
  }

  submitOwner(e){
    e.preventDefault()
    this.props.dispatch(postOwnerRequest(this.state.newOwner, () =>
      document.location='/#/register/dog'
    ))
  }

  render(){
    const {name, address, phone, postCode, email}=this.state
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
      placeholder: "Search Places",
      name: "Demo__input",
      id: "my-input-id"
    }

    return(
      <div className='ownerForm'>
        <h1>Sign up as an Owner</h1>
        <form className='ownerForm'>
          <p><input name="name" placeholder="name" onChange={this.handleChange} value={name} /></p>
            <p><input name="name" placeholder="name" onChange={this.handleChange} value={name} /></p>
              <PlacesAutocomplete
                  autocompleteItem={AutocompleteItem}
                  inputProps={inputProps}
                  googleLogo={false}
                  name="address"
                />
          <p><input name="phone" placeholder="phone" onChange={this.handleChange} value={phone} /></p>
          <p><input name="postCode" placeholder="postCode" onChange={this.handleChange} value={postCode} /></p>
          <p><input name="email" placeholder="email" onChange={this.handleChange} value={email} /></p>
          <p><input type="submit" onClick={this.submitOwner.bind(this)} /></p>
        </form>
        <Link to="/register"className="NoLeftButton">Cancel</Link>
      </div>
    )
  }
}

export default connect()(OwnerForm)
