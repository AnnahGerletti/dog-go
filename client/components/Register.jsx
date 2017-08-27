import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Logout from './Logout'


const Register = ({isAuthenticated}) => {
  // handleClickWalker(event){
  //   document.location='/#/register/walker'
  // }
  //
  // handleClickOwner(event){
  //   document.location='/#/register/owner'
  // }

  return (
    <div className="RegButtonsCon">
      <div className="RegButtons">
        <div>
          <Link to='/register/walker' className='NoLeftButton button walkerButton RegButton'>Walker</Link>
        </div>
        <div>
          <Link to='/register/owner' className='button ownerButton RegButton'>Owner</Link>
        </div>
      </div>
      <div>
        <Link to="/registerform" className='button cancelButton loneButton' replace>Cancel</Link>
      </div>
      {isAuthenticated &&
        <Logout />
      }

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Register)



//can't add a link to a button
//can create a function that handels the click. if so then need to tell the difference between clicking owners or walkers button.
//can you have the handelClick within the Button <div>??
//should they be hyper links <a>??
