// Import all actions
import * as actions from '../actions/postsActions'

export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        // intermediary for loading
        case actions.GET_POSTS:
            return { ...state, loading: true }
        // posts were successfully obtained, stop loading, data is in posts key
        case actions.GET_POSTS_SUCCESS:
            return { posts: action.payload, loading: false, hasErrors: false }
        // posts were not successful, stop loading, has errors is true

        case actions.GET_POSTS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        
        default:
            return state
    }
}