import {SIGN_IN, SIGN_OUT} from './actionTypes';
export function signIn(data) {
  return {type: SIGN_IN, item: data};
}
export function signOut(data) {
  return {type: SIGN_OUT, item: data};
}
