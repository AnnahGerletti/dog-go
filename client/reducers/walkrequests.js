export default function (state=[], action) {
console.log(action)
  switch(action.type) {
    case 'RECEIVE_WALK_REQUESTS_FR':
      return [...action.walkRequests]
    default:
      return state
  }
}
