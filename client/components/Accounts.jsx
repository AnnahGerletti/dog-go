import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import PassNeeded from './PassNeeded'

function Accounts (props) {
  let {isAuthenticated, passwordNeeded, user} = props.auth
  if (!isAuthenticated) document.location = '/#/'
  if (passwordNeeded) return <PassNeeded />
  return <div>
    <br />
    {user.isWalker
      ? <Link to="/gowalking">Walker View</Link>
      : <Link to="/register/walker">Register as Walker</Link>
    }
    {user.isOwner
      ? <Link to="/walkRequest">Owner View</Link>
      : <Link to="/register/owner">Register as Owner</Link>
    }
  </div>
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Accounts)
