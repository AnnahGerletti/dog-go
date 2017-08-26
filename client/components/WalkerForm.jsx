import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {postWalkerRequest} from '../actions/register'

class WalkerForm extends React.Component {
  constructor (props){
      super (props)
      this.state={
        newWalker: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    const newWalker = this.state.newWalker
    newWalker[e.target.name] = e.target.value
    this.setState({
      newWalker: newWalker
    })
  }

  submitWalker(e){
      e.preventDefault()
      this.props.dispatch(postWalkerRequest(this.state.newWalker))
  }
render (){
  const {name, address, phone, postCode, email} =this.state
  return(
    <div>
      <h1>Sign up as a Walker</h1>
      <form className='walkerForm'>
        <p><input name="name" placeholder="name" onChange={this.handleChange} value={name} /></p>
        <p><input name="address" placeholder="address" onChange={this.handleChange} value={address} /></p>
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

export default connect()(WalkerForm)
