import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


import Logout from './Logout'


const About = (props) => {
  return (

    <div className="AboutCon">
  We are four eager developers who took on a big project to replicate an interactive app for people who had dogs and people who like to walk dogs. <br /> We gave ourselves one week to do it all. Plan, Organize, and Deply. This is what came about it...<br/><br/>
<Link to="/">Back.</Link>
    </div>
  )
}


export default connect()(About)