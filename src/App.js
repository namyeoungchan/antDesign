import React, { useLayoutEffect, useState } from 'react';
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

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [initialized, setInitialized] = useState(false);
  const onFinish = async (values) => {
    let parameter = { method: 'GET' };
    commonFetch('http://localhost:8080/chkSession', parameter)
      .then((result) => {
        setIsLoggedIn(result.message !== 'Access Denied'); // 로그인 여부를 상태에 저장합니다.
      })
      .catch((error) => {
        // 에러 처리
        console.log(error);
      });
  };

  useLayoutEffect(
    (isLoggedIn) => {
      if (!initialized) {
        // 페이지 진입 시점에 실행되는 코드
        let parameter = { method: 'GET' };
        commonFetch('http://localhost:8080/chkSession', parameter)
          .then((result) => {
            // result 값 처리
            console.log(result);
            setIsLoggedIn(result.message !== 'Access Denied'); // 로그인 여부를 상태에 저장합니다.
            console.log(isLoggedIn);
          })
          .catch((error) => {
            // 에러 처리
            alert('관리자 문의 부탁드립니다.');
            console.log(error);
          });

        // 초기화 상태를 업데이트하여 다음에는 실행되지 않도록 설정
        setInitialized(true);
      }
    },
    [initialized],
  );

  return (
    <Router>
      <Routes>
        {/* 로그인 상태에 따라 LoginPage 또는 MainPage 컴포넌트를 렌더링합니다 */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/main" /> : <LoginPage />}
        />
        <Route
          path="/main"
          element={isLoggedIn ? <MainPage /> : <Navigate to="/login" />}
        />
        {/* 로그인하지 않은 상태에서 다른 경로로 접근하려고 할 때 LoginPage로 리다이렉트합니다 */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
