export default function receive(state = [], action) {
  console.log('reducer', action.request)
  switch (action.type) {
    case 'RECEIVE_DOGS':
      return [...action.dogs]

    default:
      return state
  }
}
