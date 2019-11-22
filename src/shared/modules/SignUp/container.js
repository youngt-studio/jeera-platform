import {connect} from 'react-redux';
import SignUp from './components/SignUp';
import {
  onTextChangeEmail,
  onTextChangePassword,
  onTextChangeFullname,
  onChangeAvatarImage,
  onTextChangePhoneNumber,
  signUp,
} from './actions';

export default connect(
  state => ({...state.signUp}),
  {
    onTextChangeEmail,
    onTextChangePassword,
    onTextChangeFullname,
    onChangeAvatarImage,
    onTextChangePhoneNumber,
    signUp,
  },
)(SignUp);
