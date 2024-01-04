import { combineReducers } from 'redux';
import { loginInfoReducer } from './loginInfoReducer';
import { popupInfoReducer } from './popupInfoReducer';

const rootReducer = combineReducers({
  loginInfo: loginInfoReducer,
  popupInfo: popupInfoReducer,
});

export default rootReducer;
