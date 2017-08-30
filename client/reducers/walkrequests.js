export default function (state=[], action) {
  switch(action.type) {
    case 'RECEIVE_WALK_REQUESTS_FR':
      return [...action.walkRequests]
    default:
      return state
  }
}
