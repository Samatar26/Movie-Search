import React from 'react'
import configureStore from 'redux-mock-store'

import App from '../components/App'

const mockStore = configureStore([])

export default ({ children }) => {
  const store = mockStore({})

  return (
    <App store={store}>
      {children}
    </App>
  )
}
