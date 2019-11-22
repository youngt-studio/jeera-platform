export const EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use';
export const INVALID_EMAIL = 'auth/invalid-email';
export const OPERATION_NOT_ALLOWED = 'auth/operation-not-allowed';
export const WEAK_PASSWORD = 'auth/weak-password';
export const USER_DISABLED = 'auth/user-disabled';
export const USER_NOT_FOUND = 'auth/user-not-found';
export const WRONG_PASSWORD = 'auth/wrong-password';
export const TOO_MANY_REQUEST_ATTEMPT = 'auth/too-many-requests';
export const UNKNOWN = 'auth/unknown';

export default {
  [EMAIL_ALREADY_IN_USE]: 'This email is already registered.',
  [INVALID_EMAIL]: 'This email is invalid.',
  [OPERATION_NOT_ALLOWED]: 'Operation is not allowed.',
  [WEAK_PASSWORD]: 'Password is too weak.',
  [USER_DISABLED]: 'This account has been disabled.',
  [USER_NOT_FOUND]: 'This account does not exist.',
  [WRONG_PASSWORD]: 'Wrong email or password',
  [TOO_MANY_REQUEST_ATTEMPT]:
    'Please try sign in again after 5 minutes minimum.',
};
