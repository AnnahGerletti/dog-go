import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {receiveOwnersRequest} from '../actions/receiveOwners'

class WalkRequest extends React.Component {

  componentDidMount() {
    this.props.dispatch(receiveOwnersRequest())
  }
  render() {
    const{receive}=this.props
    return(
      <div className='container'>
        <h2 className='subHeader'>Dog List</h2>
        <ul>
            {receive.map((owner, i) => {
              return <li key={i}>the owners are -- {owner.owner_name} their dogs are called {owner.dog_name}</li>})}
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state.receive);
  return {receive: state.receive}
}

export default connect(mapStateToProps)(WalkRequest)
