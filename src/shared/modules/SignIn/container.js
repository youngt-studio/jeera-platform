import {connect} from 'react-redux';
import SignIn from './components/SignIn';
import {
  onChangeSignInMethod,
  onTextChangeEmail,
  onTextChangePassword,
  onTextChangePhoneNumber,
  onTextChangeOTPCode,
  signIn,
} from './actions';

export default connect(
  state => ({...state.signIn}),
  {
    onChangeSignInMethod,
    onTextChangeEmail,
    onTextChangePassword,
    onTextChangePhoneNumber,
    onTextChangeOTPCode,
    signIn,
  },
)(SignIn);
