export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
  }
  
  export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        // any actions to be taken, the switch handles here
      default:
        return state
    }
  }