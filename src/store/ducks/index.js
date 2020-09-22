import { combineReducers } from 'redux';

// import { toastReducer as toast } from 'react-native-redux-toast';
// import info from './info';
import home from './home';
import token from './token';
import detail from './detail';

export default combineReducers({
  // toast,
  // info,

  home,
  token,
  detail,
});
