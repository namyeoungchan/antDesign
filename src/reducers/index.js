import { combineReducers } from 'redux';
import { loginInfoReducer } from './loginInfoReducer';

const rootReducer = combineReducers({
  loginInfo: loginInfoReducer,
});

export default rootReducer;
