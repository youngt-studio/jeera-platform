import * as actionTypes from './actionTypes';

export const signIn = signInMethod => ({
  type: actionTypes.SIGN_IN,
  payload: {signInMethod},
});

export const signInSuccessfully = credential => ({
  type: actionTypes.SIGN_IN_SUCCESSFULLY,
  payload: {credential},
});

export const signInFailure = error => ({
  type: actionTypes.SIGN_IN_FAILURE,
  error,
});

export const onChangeSignInMethod = index => ({
  type: actionTypes.ON_CHANGE_SIGN_IN_METHOD,
  payload: {index},
});

export const onTextChangeEmail = value => ({
  type: actionTypes.ON_TEXT_CHANGE_EMAIL,
  payload: {value},
});

export const onTextChangePassword = value => ({
  type: actionTypes.ON_TEXT_CHANGE_PASSWORD,
  payload: {value},
});

export const onTextChangePhoneNumber = value => ({
  type: actionTypes.ON_TEXT_CHANGE_PHONE_NUMBER,
  payload: {value},
});

export const onTextChangeOTPCode = value => ({
  type: actionTypes.ON_TEXT_CHANGE_OTP_CODE,
  payload: {value},
});
