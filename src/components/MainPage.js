import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import commonFetch from '../comLib/CommonFetch';
import { useDispatch } from 'react-redux';
import { LOGIN_INFO_CLEAR } from '../reducers/loginInfoReducer';
import LoginPage from './LoginPage';

const { Header, Content, Footer } = Layout;
const headerMenu = ['회원관리', '상품관리'].map((key) => ({
  key,
  label: ` ${key}`,
}));

const App = () => {
  const navigate = useNavigate();
  // const test = useSelector((state) => state.loginInfo);
  // console.log(test);
  const dispatch = useDispatch();
  // );
  const Logout = async () => {
    try {
      // const loginInfo = useSelector((state) => state.loginInfo);
      // console.log(loginInfo());
      const parameter = {
        method: 'POST',
        body: { loginId: 'waefaw' },
      };

      const result = await commonFetch(
        `http://localhost:8080/logout`,
        parameter,
      );
      navigate(LoginPage);
      alert('로그아웃 되었습니다..');
      dispatch(LOGIN_INFO_CLEAR());
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
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
