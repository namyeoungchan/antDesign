import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginInfo: {
    loginId: '',
  },
};

export const loginInfo = createSlice({
  name: 'loginInfo',
  initialState,
  reducers: {
    LOGININFO_LOGIN: (state, action) => {
      state.loginInfo.loginId = action.payload.loginId; // 수정된 부분
    },
  },
});

export const { LOGININFO_LOGIN } = loginInfo.actions;

export default loginInfo.reducer; // 수정된 부분
