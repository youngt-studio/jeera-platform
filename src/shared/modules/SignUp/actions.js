import * as actionTypes from './actionsTypes';

export const onTextChangeEmail = value => ({
  type: actionTypes.ON_TEXT_CHANGE_EMAIL,
  payload: {value},
});

export const onTextChangePassword = value => ({
  type: actionTypes.ON_TEXT_CHANGE_PASSWORD,
  payload: {value},
});

export const onTextChangeFullname = value => ({
  type: actionTypes.ON_TEXT_CHANGE_FULL_NAME,
  payload: {value},
});

export const onChangeAvatarImage = avatar => ({
  type: actionTypes.ON_CHANGE_AVATAR,
  payload: {avatar},
});

export const onTextChangePhoneNumber = value => ({
  type: actionTypes.ON_TEXT_CHANGE_PHONE_NUMBER,
  payload: {value},
});

export const signUp = () => ({
  type: actionTypes.SIGN_UP,
});

export const signUpSuccessfully = credential => ({
  type: actionTypes.SIGN_UP_SUCCESSFULLY,
  payload: {credential},
});

export const signUpFailure = error => ({
  type: actionTypes.SIGN_UP_FAILURE,
  error,
});
