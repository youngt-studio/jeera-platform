import React from 'react';
import {Router} from 'react-router-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {all} from 'redux-saga/effects';
import {routerMiddleware, connectRouter} from 'connected-react-router';

import RootContainer from './Root';
import {history} from './history';
import root from './Root/reducer';
import signIn from './SignIn/reducer';
import signUp from './SignUp/reducer';
import sagaMiddleware from './rootSaga';
import {signInSaga} from './SignIn/sagas';
import {signUpSagas} from './SignUp/sagas';

const prodMiddleware = [thunk, sagaMiddleware, routerMiddleware(history)];

const mids = applyMiddleware(...prodMiddleware);
const rootReducer = combineReducers({
  root,
  signIn,
  signUp,
});

const routerRootReducer = connectRouter(history)(rootReducer);

const store = createStore(routerRootReducer, composeWithDevTools(mids));

function* combineSagas() {
  const sagas = [signInSaga(), signUpSagas()];
  yield all(sagas);
}
sagaMiddleware.run(combineSagas);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <RootContainer />
    </Router>
  </Provider>
);

export default App;
