import React from 'react'
import {connect} from 'react-redux'
import {receiveWalkerRequest} from '../actions/walkers'

export class ReceiveWalk extends React.Component {

  componentDidMount() {
    this.props.dispatch(receiveWalkerRequest())
  }

  render() {
    const { walkerReducer } = this.props
    return (
      <div>
        <h3>Walkers</h3>
        <ul>
          {walkerReducer.map((walker, i) => {
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
    walkerReducer: state.walkerReducer
  }
}

export default connect(mapStateToProps)(ReceiveWalk)
