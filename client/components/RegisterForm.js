import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import { registerUser, registerError } from '../actions/register'
import ErrorMessage from './ErrorMessage'

class RegisterForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirm: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick (event) {
    const { username, password, confirm } = this.state
    if (password !== confirm) {
      this.props.registerError('Passwords do not match!')
      return
    }
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    this.props.registerUser(creds, () =>{
      this.props.history.push('/register')
    })
  }

  render () {
    const { username, password, confirm } = this.state
    return (
      <div className="registerUser">
        <p><input name='username' placeholder='Username'
          onChange={this.handleChange} value={username} /></p>

        <p><input type='password' name='password' placeholder='Password'
          onChange={this.handleChange} value={password} /></p>

        <p><input type='password' name='confirm' placeholder='Confirm'
          onChange={this.handleChange} value={confirm} /></p>

        <Link to="#" className="NoLeftButton loneButton"onClick={(e) => this.handleClick(e)}>
          Register
        </Link>

        <ErrorMessage reducer='auth' />
      </div>

    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds, callback) => {
      return dispatch(registerUser(creds, callback))
    },
    registerError: (message) => {
      dispatch(registerError(message))
    }
  }
}

export default connect(null, mapDispatchToProps)(RegisterForm)
