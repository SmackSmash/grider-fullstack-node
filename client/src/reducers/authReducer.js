import actionTypes from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
