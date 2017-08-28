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
      <div>
        <h2>Owner List</h2>
        <ul>
            {receive.map((owner, i) => {
              return <li key={i}>the owners are -- {owner.name}</li>})}
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {receive: state.receive}
}

export default connect(mapStateToProps)(WalkRequest)
