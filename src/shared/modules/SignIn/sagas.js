import {takeLatest, select, call, put} from 'redux-saga/effects';
import {push} from 'connected-react-router';
import * as signInActionTypes from './actionTypes';
import * as signInActions from './actions';
import * as constants from '../../config/constants';
import AuthenticationService from '../../services/AuthenticationService';
import ErrorDTO from '../../dto/ErrorDTO';

function* signIn(action) {
  try {
    const {signInMethod} = action.payload;
    if (signInMethod === constants.SIGN_METHOD.EMAIL) {
      const state = yield select();
      const {email, password} = state.signIn;
      const response = yield call(
        AuthenticationService.signIn,
        email,
        password,
      );

      if (response instanceof ErrorDTO) {
        yield put(signInActions.signInFailure(response));
      } else {
        yield put(signInActions.signInSuccessfully(response));
        yield put(push('/dash-board'));
      }
    }
  } catch (e) {
    const exception = new ErrorDTO({code: 500, message: 'Unexpected Error'});
    yield put(signInActions.signInFailure(exception));
  }
}

export function* signInSaga() {
  yield takeLatest(signInActionTypes.SIGN_IN, signIn);
}
