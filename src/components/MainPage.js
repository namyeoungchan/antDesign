import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import commonFetch from '../comLib/CommonFetch';
import store from '../store/store';
import { useDispatch } from 'react-redux';

const { Header, Content, Footer } = Layout;
const headerMenu = ['회원관리', '상품관리'].map((key) => ({
  key,
  label: ` ${key}`,
}));

const App = () => {
  const dispatch = useDispatch();
  dispatch({
    type: 'LOGIN_SUCCESS',
    data: {
      loginId: 'dsfwes',
      sessionId: 'awefawe',
    },
  });
  console.log(store.getState());
  console.log(store.getState());
  const navigate = useNavigate();
  const Logout = async () => {
    navigate('/login');
    const parameter = { method: 'GET' };
    commonFetch(`http://localhost:8080/logout`, parameter)
      .then((result) => {
        navigate('/login');
        alert('로그아웃 되었습니다..');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={headerMenu}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          ></Content>
          <button onClick={Logout}>test</button>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
