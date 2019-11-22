import firebase from 'react-native-firebase';
import MessageMapper from '../config/MessageMapper';
import ErrorDTO from '../dto/ErrorDTO';

class FirebaseDAO {
  static signInWithEmailAndPassword = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => response)
      .catch(e => new ErrorDTO({code: e.code, message: MessageMapper[e.code]}));
  };

  static signInWithPhoneNumber = phoneNumber => {
    return firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(response => response)
      .catch(e => new ErrorDTO({code: e.code, message: MessageMapper[e.code]}));
  };

  static createUserWithEmailAndPassword = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => response)
      .catch(e => new ErrorDTO({code: e.code, message: MessageMapper[e.code]}));
  };
}

export default FirebaseDAO;
