import React from 'react'
import Navbar from './Navbar'
import WalkRequest from './WalkRequest'
import Register from './Register'
import WalkerForm from './WalkerForm'
import OwnerForm from './OwnerForm'
import DogForm from './DogForm'
import { HashRouter as Router, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <h1>Dog-go</h1>

      <Navbar />
      <div className='quote'>
        <Router>
          <div>
            <Route exact path='/walkrequest' component={WalkRequest} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/register/walker' component={WalkerForm} />
            <Route exact path='/register/owner' component={OwnerForm} />
            <Route exact path= '/register/dog' component={DogForm} />
          </div>
        </Router>

      </div>
    </div>
  )
}

export default App
