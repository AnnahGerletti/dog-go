import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {postOwnerRequest} from '../actions/register'

class OwnerForm extends React.Component {
  constructor (props){
    super (props)
    this.state={
      newOwner: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    const newOwner = this.state.newOwner
    newOwner[e.target.name] = e.target.value
    this.setState({
      newOwner: newOwner
    })
  }

  submitOwner(e){
    e.preventDefault()
    this.props.dispatch(postOwnerRequest(this.state.newOwner))
  }

  render(){
    console.log(this.state.newOwner);
    const {name, address, phone, postCode, email}=this.state
    return(
      <div>
        <h1>Sign up as an Owner</h1>
        <form>
          <input name="name" placeholder="name" onChange={this.handleChange} value={name} />
          <input name="address" placeholder="address" onChange={this.handleChange} value={address} />
          <input name="phone" placeholder="phone" onChange={this.handleChange} value={phone} />
          <input name="postCode" placeholder="postCode" onChange={this.handleChange} value={postCode} />
          <input name="email" placeholder="email" onChange={this.handleChange} value={email} />
          <input type="submit" onClick={this.submitOwner.bind(this)}/>
        </form>
        <Link to="/register">Cancel</Link>
      </div>
    )
  }
}

export default connect()(OwnerForm)
