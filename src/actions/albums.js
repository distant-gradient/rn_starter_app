import axios from 'axios';
import { ALBUMS_REQUEST, ALBUMS_FAILURE, ALBUMS_SUCCESS } from './types';

export const getAlbums = () => 
{
  return dispatch => 
  {
    let url = 'https://rallycoding.herokuapp.com/api/music_albums'
   
    dispatch({ type: ALBUMS_REQUEST })
    axios.get(url)
      .then(data => { dispatch({type: ALBUMS_SUCCESS, payload: data}) })
      .catch(error => { dispatch({type: ALBUMS_FAILURE, error: error}) })
  }
}
