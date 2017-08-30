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

  handleClick (e) {
    document.location = '/#/register/dog'
  }

  render() {
    const {dogs} = this.props
    const {showWalk} = this.state
    return(
      <div className='container'>
        <h2 className='subHeader'>Dog List</h2>
        <div className="dogList">
          <button onClick={this.handleClick}>Add Another Dog</button>
          <ul>
              {dogs.map((dog, i) => {
                return <li key={i}><button className="dogWalk loneButton" onClick={this.toggleWalk.bind(this)}>Your lovely doggo: <strong>{dog.name}</strong></button>
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
