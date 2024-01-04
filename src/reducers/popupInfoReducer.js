// reducers/loginInfoReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  noticePopupInfo: {
    visible: false,
    title: '',
    content: '',
    writer: '',
    crudFlag: '',
  },
};

const popupInfo = createSlice({
  name: 'popupInfo',
  initialState,
  reducers: {
    NOTICE_POPUP_INFO: (state, action) => {
      state.visible = action.payload.visible;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.content = action.payload.writer;
      state.crudFlag = action.crudFlag;
    },
    // 다른 액션들에 대한 처리
  },
});

export const { NOTICE_POPUP_INFO } = popupInfo.actions; // 수정된 부분
export const popupInfoReducer = popupInfo.reducer;
