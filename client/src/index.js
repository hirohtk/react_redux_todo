// External imports
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



// createStore, to create the store that will maintain the Redux state
// applyMiddleware, to be able to use middleware, in this case thunk
// Provider, to wrap the entire application in Redux
// thunk, a middleware that allows us to make asynchronous actions in Redux
// composeWithDevTools, code that connects your app to Redux DevTools

// Local imports
import App from './App'
import rootReducer from './reducers'

// Assets
import './index.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)