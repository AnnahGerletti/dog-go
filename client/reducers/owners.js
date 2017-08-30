export default function owners(state = [], action) {
  // console.log('reducer', action)
  switch (action.type) {
    case 'ADD_OWNER':
      return [...state, action.owner]
    case 'RECEIVE_OWNERS':
      return [...action.owner]
    case 'SEND_WALK_REQUEST':
      return [...state, action.request]
    case 'RECEIVE_WALK_REQUEST':
      return [...action.request]
    default:
      return state
  }
}
