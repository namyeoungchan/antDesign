import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import commonFetch from '../comLib/CommonFetch.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../reducers/loginInfoReducer';

function LoginPage() {
  const [mode, setMode] = useState('Login');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const endpoint = mode === 'Login' ? 'loginUser' : 'signIn';
    const parameter = { method: 'POST', body: values };

    commonFetch(`http://localhost:8080/${endpoint}`, parameter)
      .then((result) => {
        if (result.code === '200') {
          console.log(values.loginId);
          console.log(result.sessionId);
          dispatch(
            LOGIN_SUCCESS({
              loginId: values.loginId,
              sessionId: result.sessionId,
            }),
          );

          localStorage.setItem('authCookie', result.sessionId);
          localStorage.setItem('SESSION_ID', result.sessionId);

          navigate('/main');
          alert('로그인되었습니다.');
        } else {
          alert(result.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        backgroundColor: '#E6F7FF',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form
        name="centerForm"
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '50px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          maxWidth: '500px',
        }}
      >
        <Form.Item
          label="loginId"
          name="loginId"
          rules={[
            {
              required: true,
              message: '아이디를 입력해주세요!!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="pw"
          name="pw"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {mode === 'Login' ? (
          <>
            <Form.Item wrapperCol={{ offset: 1, span: 20 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '300px' }}
              >
                로그인
              </Button>
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 1, span: 20 }}
              style={{ height: '1px' }}
            >
              <Button
                onClick={() => setMode('signIn')}
                style={{ width: '300px' }}
              >
                회원가입
              </Button>
            </Form.Item>
          </>
        ) : (
          <Form.Item wrapperCol={{ offset: 1, span: 20 }}>
            <Button type="primary" htmlType="submit" style={{ width: '300px' }}>
              회원가입
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
}

export default LoginPage;
