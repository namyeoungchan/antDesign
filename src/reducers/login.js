import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginInfo: {
    loginId: '',
    loginIp: '',
  },
};
export const loginInfo = createSlice({
  name: 'loginInfo',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loginId = action.loginId; // 올바른 부분
      state.loginIp = action.loginIp; // 올바르지 않은 부분, state.loginId 대신 state.loginIp로 수정
    },
  },
});

export const { login } = loginInfo.actions;

export default login.reducer;
