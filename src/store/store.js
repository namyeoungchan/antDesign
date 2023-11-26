import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const store = configureStore({
  reducer: rootReducer, // 수정된 부분
});

export default store;
