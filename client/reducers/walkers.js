export const walkerReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_WALKER':
      return [...action.walker]
    default:
      return state
  }
}
