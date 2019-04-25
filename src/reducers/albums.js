import { ALBUMS_REQUEST, ALBUMS_FAILURE, ALBUMS_SUCCESS } from '../actions/types'

const initState =
{
  albums: {},
  loading: false,
  error: ''
}

export default (state = initState, action) => 
{
  switch (action.type) 
  {
    case ALBUMS_REQUEST: 
    {
      const newState = 
      {
        ...state,
        loading: true,
        error: ''
      }
      return newState
    }
    case ALBUMS_SUCCESS: 
    {
      const newState = 
      {
        ...state,
        albums: action.payload,
        loading: false,
        error: '',
      }
      return newState
    }
    case ALBUMS_FAILURE: 
    {
      const newState = 
      {
        ...state,
        loading: false,
        error: action.error
      }
      console.log(`Albums Error: ${newState}`)
      return newState
    }
    default:
      return state
  }
}

