import React from 'react'
import {connect} from 'react-redux'
import {receiveWalkerRequest} from '../actions/walkers'

export class ReceiveWalk extends React.Component {

  componentDidMount() {
    this.props.dispatch(receiveWalkerRequest())
  }

  render() {
    const { walkers } = this.props
    return (
      <div>
        <h3>Walkers</h3>
        <ul>
          {walkers.map((walker, i) => {
            return <li key={i}>
              {walker.name}
              {walker.address}
              {walker.postCode}
            </li>

          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    walkers: state.walkers
  }
}

export default connect(mapStateToProps)(ReceiveWalk)
