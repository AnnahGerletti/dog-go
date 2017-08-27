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
    const {name, address, phone, postCode, email}=this.state
    return(
      <div className='ownerForm'>
        <h1>Sign up as an Owner</h1>
        <form className='ownerForm'>
          <p><input name="name" placeholder="name" onChange={this.handleChange} value={name} /></p>
          <p><input name="address" placeholder="address" onChange={this.handleChange} value={address} /></p>
          <p><input name="phone" placeholder="phone" onChange={this.handleChange} value={phone} /></p>
          <p><input name="postCode" placeholder="postCode" onChange={this.handleChange} value={postCode} /></p>
          <p><input name="email" placeholder="email" onChange={this.handleChange} value={email} /></p>
          <p><input type="submit" onClick={this.submitOwner.bind(this)}/></p>
        </form>
        <Link to="/register"className="NoLeftButton">Cancel</Link>
      </div>
    )
  }
}

export default connect()(OwnerForm)
