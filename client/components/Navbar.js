import React from 'react'
import { connect } from 'react-redux'
import {Link, Route, withRouter } from 'react-router-dom'

import Links from './Links'
import Logout from './Logout'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="Navbar">
      <div>
        <div>
          {!isAuthenticated && (
            <div className="NavContainer">
              <Route exact path='/' render={() => (
                <Links to='Home' />
              )} />
              <Route path='/login' render={() => (
                <div>
                  <Links to='Login' />
                  <LoginForm />
                </div>
              )} />
            <Route path='/registerform' render={({history}) => (
                <div>
                  <Links to='Register' />
                  <RegisterForm history={history}/>
                </div>
              )} />
            </div>
          )}
          {isAuthenticated &&
            <div className="navContainer">
              <Logout />
              <Link to="/accounts" className="LeftButton">Accounts</Link>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps)(Navbar))
