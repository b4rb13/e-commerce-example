import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (payload) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload,
});

export const signInSuccess = (payload) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload,
});

export const signInFailure = (payload) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (payload) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload,
});

export const signUpStart = payload => ({
  type: UserActionTypes.SIGN_UP_START,
  payload
});

export const signUpSuccess = ({user, additionalData}) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: {user, additionalData}
});

export const signUpFailure = (payload) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload,
});

