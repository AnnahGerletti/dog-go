export default function walkers(state = [], action) {
  switch (action.type) {
    case 'ADD_WALKER':
      return [...state, action.walker]
    case 'RECEIVE_WALKER':
      return [...action.walker]
    default:
      return state
  }
}
