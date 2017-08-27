export default function receive (state = [], action) {
  console.log('receive reducer', action.owner);
  switch (action.type) {
    case 'RECEIVE_OWNERS':
      return [...action.owner]
    default:
      return state
  }
}
