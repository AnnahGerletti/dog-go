export default function walkerReducer(state = [], action) {
  console.log('reducer action', action.walker);
  switch (action.type) {
    case 'RECEIVE_WALKER':
      return [...action.walker]
    default:
      return state
  }
}
