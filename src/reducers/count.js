import { INCREMENT_COUNT, RESET_COUNT } from '../actions/types'

const initState = { count: 0 }

export default (state = initState, action) => 
{
  switch (action.type) 
  {
    case INCREMENT_COUNT:
    {
      return { count: state.count + action.payload }
    }
    case RESET_COUNT:
    {
      return { count: 0 } 
    }
    default:
      return state
  }
}
