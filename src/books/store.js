import { createStore } from 'redux';

// Define el reducer
function counterReducer(state = {counter: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'INCREMENT_BY_NUMBER':
      return { ...state, counter: state.counter + action.number}
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log('State updated:', store.getState());
});


export default store;
