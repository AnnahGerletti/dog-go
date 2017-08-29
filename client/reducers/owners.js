export default function owners(state = [], action) {
  console.log('reducer', action.request)
  switch (action.type) {
    case 'ADD_OWNER':
      return [...state, action.owner]
    case 'RECEIVE_OWNERS':
      return [...action.owner]
    case 'SEND_WALK_REQUEST':
      return [...state, action.request]
    default:
      return state
  }
}
