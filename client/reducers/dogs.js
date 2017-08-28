export default function dogs(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_DOGS':
      return [...action.dogs]
    case 'ADD_DOG':
      return [...state, action.dog]
    default:
      return state
  }
}
