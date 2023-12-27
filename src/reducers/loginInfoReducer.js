// reducers/loginInfoReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginId: '',
  sessionId: '',
  isLoggedIn: false,
};

const loginInfo = createSlice({
  name: 'loginInfo',
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state, action) => {
      state.loginId = action.payload.loginId;
      state.sessionId = action.payload.sessionId;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    LOGIN_INFO_CLEAR: (state, action) => {
      state.loginId = '';
      state.sessionId = '';
      state.isLoggedIn = false;
    },
    // 다른 액션들에 대한 처리
  },
});

export const { LOGIN_SUCCESS, LOGIN_INFO_CLEAR } = loginInfo.actions; // 수정된 부분
export const loginInfoReducer = loginInfo.reducer;
