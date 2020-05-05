import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (payload) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload
});

export const signInSuccess = (payload) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload,
});

export const signInFailure = (payload) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload,
});


