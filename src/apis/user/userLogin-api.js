import apiInstance from '../index';

export const setUserLogin = async (data) =>
  await apiInstance.post('/loginUser', data);
export const setUserSign = async (data) =>
  await apiInstance.post('/signIn', data);
export const chkUserSession = async () => await apiInstance.get('/chkSession');
export const setUserLogOut = async () => await apiInstance.get('/logout');
