import FirebaseDAO from '../dao/FirebaseDAO';

class AuthenticationService {
  static verifySignInInformation = (email, password) => {
    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const isEmailValid = EMAIL_REGEX.test(email);
    const isPasswordValid = password.length >= 6;
    return isEmailValid && isPasswordValid;
  };

  static signIn = (email, password) =>
    FirebaseDAO.signInWithEmailAndPassword(email, password);

  static signUp = (email, password) =>
    FirebaseDAO.createUserWithEmailAndPassword(email, password);
}

export default AuthenticationService;
