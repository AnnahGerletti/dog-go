import React from 'react'
import Navbar from './Navbar'
import WalkRequest from './WalkRequest'
import Register from './Register'
import WalkerForm from './WalkerForm'
import OwnerForm from './OwnerForm'
import { HashRouter as Router, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="container">


      <div className="logo"></div>
      <Navbar />
      <div className='quote'>
        <Router>
          <div>
            <Route exact path='/walkrequest' component={WalkRequest} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/register/walker' component={WalkerForm} />
            <Route exact path='/register/owner' component={OwnerForm} />
          </div>
        </Router>

      </div>
    </div>
  )
}

export default App
