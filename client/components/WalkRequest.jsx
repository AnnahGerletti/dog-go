import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {receiveOwnersRequest, sendWalkRequest} from '../actions/owners'

class WalkRequest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showWalk: false
    }
  }

  componentDidMount() {
    this.props.dispatch(receiveOwnersRequest())
  }

  toggleWalk () {
    this.setState({
      showWalk: !this.state.showWalk
    })
  }

  submitWalkRequest(owner) {
    this.props.dispatch(sendWalkRequest(owner.dog_id))
  }

  render() {
    const {dogs} = this.props
    const {showWalk} = this.state
    console.log({dogs});
    return(
      <div className='container'>
        <h2 className='subHeader'>Dog List</h2>
        <div className="dogList">
          <ul>
              {dogs.map((dog, i) => {
                return <li key={i}><button className="dogWalk loneButton" onClick={this.toggleWalk.bind(this)}>Your lovely doggo: <strong>{dog.name}</strong></button>
                {showWalk && <button className='requestWalk loneButton' onClick={() => this.submitWalkRequest(owner)}>Walk {dog.name}?</button>}
                </li>})}

          </ul>
      </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {dogs: state.dogs}
}

export default connect(mapStateToProps)(WalkRequest)
