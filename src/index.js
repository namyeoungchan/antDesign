// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { NotFound } from './views/NotFound';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <LoginPage /> },
      { path: '/main', element: <MainPage /> },
      { path: '/board/notice', element: <MainPage /> },
      { path: '/board/lunch-menu', element: <MainPage /> },
      { path: '/store-management/admin', element: <MainPage /> },
      { path: '/store-management/user', element: <MainPage /> },
      { path: '/user-management/admin', element: <MainPage /> },
      { path: '/user-management/user', element: <MainPage /> },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} router={router}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
