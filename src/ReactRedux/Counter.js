import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { getCounterValue } from './reducers/getCounterValue'
import {decrement, increment} from './reducers/counterReducer'

const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)

  const onIncrement = () => {
    dispatch(increment())
  }

  const onDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button data-testid="increment-btn" onClick={onIncrement}>+1</button>
      <button data-testid="decrement-btn" onClick={onDecrement}>-1</button>
    </div>
  )
}

export default Counter