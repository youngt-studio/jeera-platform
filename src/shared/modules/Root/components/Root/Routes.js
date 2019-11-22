import React from 'react';
import {Route, Redirect} from 'react-router-native';
import SignIn from '../../../SignIn';
import Dashboard from '../../../Dashboard';
import SignUp from '../../../SignUp';
import routes from '../../../../config/routes';
import * as screens from '../../../../config/screens';

const AuthRoute = ({component: Component, credential, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      credential ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routes[screens.SIGN_IN_SCREEN_KEY].path,
          }}
        />
      )
    }
  />
);

const Routes = ({credential}) => (
  <>
    <Route exact path={'/'} component={SignIn} />
    <Route path={routes[screens.SIGN_IN_SCREEN_KEY].path} component={SignIn} />
    <AuthRoute
      path={routes[screens.DASH_BOARD_SCREEN_KEY].path}
      component={Dashboard}
      credential={credential}
    />
    <Route path={routes[screens.SIGN_UP_SCREEN_KEY].path} component={SignUp} />
  </>
);

export default Routes;
