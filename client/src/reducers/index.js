import { combineReducers } from 'redux'

// this is a function 
import postsReducer from './postsReducer'

// combines all your reducers that you'll make
const rootReducer = combineReducers({
  posts: postsReducer,
})

export default rootReducer