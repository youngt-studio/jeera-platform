import * as actionTypes from './actionsTypes';

const initialState = {
  email: '',
  password: '',
  fullName: '',
  phoneNumber: '',
  avatar: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_TEXT_CHANGE_EMAIL: {
      return {
        ...state,
        email: action.payload.value,
      };
    }

    case actionTypes.ON_TEXT_CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload.value,
      };
    }

    case actionTypes.ON_TEXT_CHANGE_FULL_NAME: {
      return {
        ...state,
        fullName: action.payload.value,
      };
    }

    case actionTypes.ON_TEXT_CHANGE_PHONE_NUMBER: {
      return {
        ...state,
        phoneNumber: action.payload.value,
      };
    }

    case actionTypes.ON_CHANGE_AVATAR: {
      return {
        ...state,
        avatar: action.payload.avatar,
      };
    }

    default:
      return state;
  }
};
