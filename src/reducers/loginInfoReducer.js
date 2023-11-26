import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginId: '',
  sessionId: '',
};

const loginInfo = createSlice({
  name: 'loginInfo',
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state, action) => {
      state.loginId = action.payload.loginId;
      state.sessionId = action.payload.sessionId;
    },
    // 다른 액션들에 대한 처리
  },
});

export const { LOGIN_SUCCESS } = loginInfo.actions;
export const loginInfoReducer = loginInfo.reducer; // 수정된 부분
