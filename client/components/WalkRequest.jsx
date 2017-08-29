import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {receiveOwnersRequest, sendWalkRequest} from '../actions/owners'

class WalkRequest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showWalk: false,
      showSuccessMessage: false,
      applicationAccepted: false
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

  submitWalkRequest(dog) {
    this.props.dispatch(sendWalkRequest(dog.id, () => {
      this.setState({
        showSuccessMessage: true,
        applicationAccepted: false
      })
    }))
  }

  render() {
    const {dogs} = this.props
    const {showWalk} = this.state
    return(
      <div className='container'>
        <h2 className='subHeader'>Dog List</h2>
        <div className="dogList">
          <ul>
              {dogs.map((dog, i) => {
                return <li key={i}><button className="dogWalk loneButton" onClick={this.toggleWalk.bind(this)}>Your lovely doggo: <strong>{dog.name}</strong></button>
                {showWalk && <button className='requestWalk loneButton' onClick={() => this.submitWalkRequest(dog)}>Walk {dog.name}?</button>}
                </li>})}

          </ul>
          {this.state.showSuccessMessage && <div>
            Your request has been sent! <br /> Waiting for response...
          </div>}
      </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {dogs: state.dogs}
}

export default connect(mapStateToProps)(WalkRequest)
