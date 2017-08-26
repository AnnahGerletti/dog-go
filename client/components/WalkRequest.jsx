import React from 'react'
import {connect} from 'react-redux'


const WalkRequest = (props) => {
  return (
    <div>
      <h1>Doggo Main Page</h1>
      <h3>List of Walkers</h3>
    </div>
  )
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(WalkRequest)
