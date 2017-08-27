export default function receive (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_OWNERS':
      return [...action.owner]
    default:
      return state
  }
}
