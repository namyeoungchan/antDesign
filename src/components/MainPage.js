import React from 'react';
import { Breadcrumb, Button, Dropdown, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_INFO_CLEAR } from '../reducers/loginInfoReducer';
import {
  LaptopOutlined,
  LogoutOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { setUserLogOut } from '../apis/user/userLogin-api';

const { Header, Content } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const App = () => {
  const navigate = useNavigate();
  const { sessionId } = useSelector((state) => state.loginInfo);
  const dispatch = useDispatch();
  // );
  const Logout = async () => {
    try {
      setUserLogOut(sessionId).then((result) => {
        navigate('login');
        dispatch(LOGIN_INFO_CLEAR());
        alert('로그아웃 되었습니다.');
      });
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const userMenuItems = [
    {
      key: 'profile',
      label: '프로필 보기',
      // Add an onClick handler for the "프로필 보기" action if needed
    },
    {
      key: 'logout',
      label: '로그아웃',
      onClick: Logout,
      icon: <LogoutOutlined />,
    },
    // Add more user-related buttons as needed
  ];
  const userMenu = (
    <Menu>
      {userMenuItems.map((item) => (
        <Menu.Item key={item.key} onClick={item.onClick}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
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
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <Dropdown overlay={userMenu} placement="bottomRight">
          <Button type="primary" size="small">
            <UserOutlined />
          </Button>
        </Dropdown>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
