import * as signInActionTypes from './actionTypes';
import {LOCATION_CHANGE} from 'connected-react-router';

const initialState = {
  email: '',
  password: '',
  phoneNumber: '',
  errorMessage: '',
  credential: null,
  selectedIndex: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE: {
      console.log('reducer', action.payload);
      return state;
    }
    case signInActionTypes.SIGN_IN: {
      console.log(action.payload);
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    }

    case signInActionTypes.SIGN_IN_SUCCESSFULLY: {
      console.log('reducer', action.payload);
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    }

    case signInActionTypes.SIGN_IN_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case signInActionTypes.ON_CHANGE_SIGN_IN_METHOD: {
      return {
        ...state,
        selectedIndex: action.payload.index,
      };
    }

    case signInActionTypes.ON_TEXT_CHANGE_EMAIL: {
      return {
        ...state,
        email: action.payload.value,
      };
    }

    case signInActionTypes.ON_TEXT_CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload.value,
      };
    }

    case signInActionTypes.ON_TEXT_CHANGE_OTP_CODE: {
      return {
        ...state,
        otpCode: action.payload.value,
      };
    }
    default:
      return state;
  }
};
