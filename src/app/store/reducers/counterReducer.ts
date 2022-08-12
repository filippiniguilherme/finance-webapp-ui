export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export default function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value: state.value += 1
      }
    case 'decrement':
      return {
        ...state,
        value: state.value -= 1
      }
    case 'incrementByAmount':
      return {
        ...state,
        value: state.value += action.payload
      }
    default:
      return state
  }
}