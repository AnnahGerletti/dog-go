import React from 'react'
import Navbar from './Navbar'
import WalkRequest from './WalkRequest'
import Register from './Register'
import { HashRouter as Router, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <h1>Quotes</h1>

      <Navbar />
      <div className='quote'>
        <Router>
          <div>
            <Route exact path='/walkrequest' component={WalkRequest} />

          </div>
        </Router>

      </div>
    </div>
  )
}

export default App
