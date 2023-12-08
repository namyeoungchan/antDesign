import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import commonFetch from './comLib/CommonFetch.js';
import LoginPage from './components/LoginPage.js';
import MainPage from './components/MainPage';
import { useSelector } from 'react-redux';

export default function App() {
  const loginInfo = useSelector((state) => state.loginInfo.isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log(loginInfo);
  useEffect(() => {
    console.log('실행됩니다');
    setLoading(true);
    const checkSession = async () => {
      try {
        const response = await commonFetch('http://localhost:8080/chkSession', {
          method: 'GET',
        });
        if (response.status === 200) {
          console.log('eeeeee');
          const jsonData = await response.json();
          if (jsonData.code === '01') setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking session:', error);
        setIsLoggedIn(false);
      } finally {
        console.log('afwefw');
        setLoading(false);
      }
    };

    checkSession();
  }, [loginInfo]);

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
