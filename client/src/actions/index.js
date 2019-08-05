import axios from 'axios';
import actionTypes from './types';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: response.data
  });
};

export const handleToken = token => async dispatch => {
  const response = await axios.post('/api/stripe', token);
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: response.data
  });
};
