import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import PassNeeded from './PassNeeded'

function Accounts (props) {
  let {isAuthenticated, passwordNeeded, user} = props.auth
  if (!isAuthenticated) document.location = '/#/'
  if (passwordNeeded) return <PassNeeded />
  return <div className="ConNoBg">
    <br />
    {user.isWalker
      ? <Link to="/mapwalkers" className="WalkerV">Walker View</Link>
      : <Link to="/register/walker" className="WalkerReg">Register as Walker</Link>
    }
    {user.isOwner
      ? <Link to="/walkRequest"className="OwnerV">Owner View</Link>
      : <Link to="/register/owner"className="OwnerReg">Register as Owner</Link>
    }
  </div>
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Accounts)
