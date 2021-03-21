import {SIGN_IN, SIGN_OUT} from '../actions/actionTypes';
const initState = {isLoading: true, isConnected: false};
export default (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, isLoading: false, isConnected: true};
    case SIGN_OUT:
      return {...state, isLoading: false, isConnected: false};
    default:
      return state;
  }
};
