import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../actions/logout'

const Logout = (props) => {
  return (
    <Link to="/" onClick={props.logoutUser} className="LoginLogout">Logout</Link>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
