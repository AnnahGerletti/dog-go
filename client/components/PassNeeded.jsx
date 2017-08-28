import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/login'

class PassNeeded extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.auth.user.username,
      password: ''
    }
    this.updatePassword = this.updatePassword.bind(this)
    this.submitDetails = this.submitDetails.bind(this)
  }
  updatePassword(e) {
    this.setState({password: e.target.value})
  }
  submitDetails(e) {
    e.preventDefault()
    this.props.dispatch(loginUser(this.state, () => document.location = "/#/accounts"))
  }
  render() {
    return <form onSubmit={this.submitDetails}>
      <label>Enter your password again please
        <input type="password" placeholder="password" onChange={this.updatePassword} />
      </label>
      <input className='loneButton' type="submit" />
    </form>
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {auth: state.auth}
}

export default connect(mapStateToProps)(PassNeeded)
