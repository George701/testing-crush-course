import React from 'react'
import ReactRedux from './ReactRedux/ReactRedux'
import { Provider } from 'react-redux'
import {createReduxStore} from './ReactRedux/store'

const App = () => {
  return (
    <Provider store={createReduxStore()}>
      <ReactRedux />
    </Provider>
  )
}

export default App