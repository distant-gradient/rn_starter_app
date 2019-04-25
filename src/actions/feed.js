import axios from 'axios';
import { FEED_REQUEST, FEED_FAILURE, FEED_SUCCESS } from './types';

export const getFeed = () => 
{
  return dispatch => 
  {
    let url = 'https://storage.googleapis.com/vaani-feed/mock/all.json'
   
    dispatch({ type: FEED_REQUEST })
    axios.get(url)
      .then(data => { dispatch({type: FEED_SUCCESS, payload: data}) })
      .catch(error => { dispatch({type: FEED_FAILURE, error: error}) })
  }
}
