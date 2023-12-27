import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLogin, setUserSign } from '../apis/user/userLogin-api';
import { LOGIN_SUCCESS } from '../reducers/loginInfoReducer';

function LoginPage() {
  const [mode, setMode] = useState('Login');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const endpoint = mode === 'Login' ? setUserLogin : setUserSign;

    try {
      const result = await endpoint(values);

      if (result.data.code === '200') {
        dispatch(
          LOGIN_SUCCESS({
            loginId: values.loginId,
            sessionId: result.data.sessionId,
            isLoggedIn: true,
          }),
        );
        localStorage.setItem('authCookie', result.data.sessionId);
        localStorage.setItem('SESSION_ID', result.data.sessionId);
        navigate('/main');

        alert('로그인되었습니다.');
      } else {
        alert(result.data.message);
      }
    } catch (error) {
      console.error(error);
    }
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
