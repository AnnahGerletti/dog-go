import React from 'react'
import {connect} from 'react-redux'

import Logout from './Logout'

const Home = (props) => {
  return (
    <div className="HomeCon">
  Dog-Go is a brand new service, which connects people who have a love of walking dogs, with people who can't always find the time to walk their dogs.<br/><br/><strong>We know there is nothing more a dog loves then to be walked. </strong>
    </div>
  )
}


export default connect()(Home)
