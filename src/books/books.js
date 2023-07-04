import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useCounter from '../hooks/use-counter';

function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const number = 5;
  const bookCounter = useCounter()
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'INCREMENT_BY_NUMBER', number })}>Increment by {number}</button>
      <br/>
      <span>Counter: {bookCounter}</span>
    </div>
  );
}

export default Counter;
