import React from 'react'
import Navbar from './Navbar'
import WalkRequest from './WalkRequest'
import { HashRouter as Router, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <h1>Quotes</h1>

      <Navbar />
      <div className='quote'>
        <Route exact path='/walkrequest' component={WalkRequest}>Login</Route>
      </div>
    </div>
  )
}

export default App
