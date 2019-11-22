import {createSelector} from 'reselect';
import {objectUtils} from '../../utils';

const credentialSelector = state => state.signIn;

export const showNavigation = createSelector(
  credentialSelector,
  ({credential}) => {
    return !objectUtils.isEmpty(credential);
  },
);
