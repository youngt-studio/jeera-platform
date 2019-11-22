import * as rootActions from './actionTypes';

export const onSelectTabNavigation = selectedIndex => ({
  type: rootActions.ON_SELECT_TAB_NAVIGATION,
  payload: {selectedIndex},
});
