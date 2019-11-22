import {takeLatest, call, put, select} from 'redux-saga/effects';

import * as actionTypes from './actionsTypes';
import AuthenticationService from '../../services/AuthenticationService';
import ErrorDTO from '../../dto/ErrorDTO';
import * as actions from './actions';

function* signUp() {
  try {
    const state = yield select();
    const {email, password, fullName, phoneNumber, avatar} = state.signUp;
    const response = yield call(AuthenticationService.signUp, email, password);
    console.log('signup',response);

    if (response instanceof ErrorDTO) {
      yield put(actions.signUpFailure(response));
    } else {
      yield put(actions.signUpSuccessfully(response));
    }
  } catch (e) {
    const exception = new ErrorDTO({code: 500, message: 'Unexpected Error'});
    yield put(actions.signUpFailure(exception));
  }
}

export function* signUpSagas() {
  yield takeLatest(actionTypes.SIGN_UP, signUp);
}
