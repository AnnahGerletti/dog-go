import React from 'react'
import {connect} from 'react-redux'
import {receiveWalkerRequest} from '../actions/walkers'

export class ReceiveWalk extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.dispatch(receiveWalkerRequest())
  }

  render() {
    const { walker } = this.props
    console.log('walker', walker);
    return (
      <div>
        Hi I am an walker looking for a walk request
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    walker: state.walker
  }
}

export default connect(mapStateToProps)(ReceiveWalk)
