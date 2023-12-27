import apiInstance from '../index';

export const setUserLogin = async (data) =>
  await apiInstance.post('/loginUser', data);
export const setUserSign = async (data) =>
  await apiInstance.post('/signIn', data);
export const chkUserSession = async (data) =>
  await apiInstance.post('/chkSession', { sessionId: data });
export const setUserLogOut = async (data) =>
  await apiInstance.post('/logout', { sessionId: data });
