import actionTypes from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
