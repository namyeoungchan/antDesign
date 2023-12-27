import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage.js';
import MainPage from './components/MainPage';
import { useDispatch, useSelector } from 'react-redux';
import { chkUserSession } from './apis/user/userLogin-api';
import { LOGIN_SUCCESS } from './reducers/loginInfoReducer';

export default function App() {
  const dispatch = useDispatch();
  const { isLoggedIn, sessionId } = useSelector((state) => state.loginInfo);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    console.log(sessionId);
    chkUserSession(sessionId)
      .then((result) => {
        if (result.status === 200) {
          if (result.data.code === '01') {
            dispatch(
              LOGIN_SUCCESS({
                isLoggedIn: true,
                sessionId: sessionId,
              }),
            );
          }
        } else {
          dispatch(
            LOGIN_SUCCESS({
              isLoggedIn: false,
            }),
          );
        }
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('세션 확인 중 오류 발생:', error);
        dispatch(
          LOGIN_SUCCESS({
            isLoggedIn: false,
          }),
        );
      });
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            loading ? (
              <div>Loading...</div>
            ) : isLoggedIn ? (
              <Navigate to="/main" />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/main"
          element={
            loading ? (
              <div>Loading...</div>
            ) : isLoggedIn ? (
              <MainPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
