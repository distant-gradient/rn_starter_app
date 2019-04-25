import { FEED_REQUEST, FEED_FAILURE, FEED_SUCCESS } from '../actions/types'

const initState = {
  feed: {},
  loading: false,
  error: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case FEED_REQUEST: {
      const newState = {
        ...state,
        loading: true,
        error: ''
      }
      return newState
    }
    case FEED_SUCCESS: {
      const newState = {
        ...state,
        feed: action.payload.data,
        loading: false,
        error: '',
      }
      return newState
    }
    case FEED_FAILURE: {
      const newState = {
        ...state,
        loading: false,
        error: action.error
      }
      console.log(`Feed Error: ${newState}`)
      return newState
    }
    default:
      return state
  }
}
