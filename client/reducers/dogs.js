export default function receive(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_DOGS':
      return [...action.dogs]

    default:
      return state
  }
}
