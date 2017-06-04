
const initialState = {
  counter: 1,
}

export default function counter(state = initialState, action) {
  switch(action.type) {
    case 'INCR':
      return {
        counter: state.counter + 1
      }
    case 'DECR':
      return {
        counter: state.counter - 1
      }
    default:
     return state
  }
}
