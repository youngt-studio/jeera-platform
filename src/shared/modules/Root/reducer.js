import * as rootActions from './actionTypes';
import * as helper from './helper';
import {LOCATION_CHANGE} from 'connected-react-router';
const initialState = {
  footer: {
    selectedIndex: 0,
  },
  header: {
    title: 'Dashboard',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE: {
      console.log('reducer', action.payload);
      return state;
    }
    case rootActions.ON_SELECT_TAB_NAVIGATION: {
      const {selectedIndex} = action.payload;
      const title = helper.mapTitleToTabIndex(selectedIndex);

      return {
        ...state,
        footer: {
          ...state.footer,
          selectedIndex,
        },
        header: {
          ...state.header,
          title,
        },
      };
    }
    default:
      return state;
  }
};
