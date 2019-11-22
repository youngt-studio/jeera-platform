import {connect} from 'react-redux';
import Root from './components/Root';
import {onSelectTabNavigation} from './action';
import {showNavigation} from './selectors';

export default connect(
  state => ({
    ...state.root,
    showNavigation: showNavigation(state),
    credential: state.signIn.credential
  }),
  {onSelectTabNavigation},
)(Root);
