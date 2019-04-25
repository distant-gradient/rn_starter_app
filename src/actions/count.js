import { INCREMENT_COUNT, RESET_COUNT } from './types';

export const incrementCount = (val) => 
{
  return(
    {
      type: INCREMENT_COUNT, 
      payload: val 
    }
  )
}


export const resetCount = () => 
{
  return(
    {
      type: RESET_COUNT,
    }
  )
}
