import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {receiveOwnersRequest} from '../actions/receiveOwners'

class WalkRequest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showWalk: false
    }
  }

  toggleWalk () {
    this.setState({
      showWalk: !this.state.showWalk
    })
  }

  componentDidMount() {
    this.props.dispatch(receiveOwnersRequest())
  }
  render() {
    const {receive} = this.props
    const {showWalk} = this.state
    return(
      <div className='container'>
        <h2 className='subHeader'>Dog List</h2>
        <div className="dogList">
          <ul>
              {receive.map((owner, i) => {
                return <li key={i}>the owners are -- {owner.owner_name} their dogs are called <button className="dogWalk loneButton" onClick={this.toggleWalk.bind(this)}>{owner.dog_name}</button>
                </li>})}
                {showWalk && <button className='requestWalk loneButton'>Walk</button>}
          </ul>
      </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state.receive);
  return {receive: state.receive}
}

export default connect(mapStateToProps)(WalkRequest)
