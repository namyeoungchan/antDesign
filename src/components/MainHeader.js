import { Button, Dropdown, Layout, Menu } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { setUserLogOut } from '../apis/user/userLogin-api';
import { LOGIN_INFO_CLEAR } from '../reducers/loginInfoReducer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mainHeaderMenu } from '../variables/contents/side-menu-info';

const { Header } = Layout;
export const MainHeader = () => {
  const navigate = useNavigate();
  const { sessionId } = useSelector((state) => state.loginInfo);
  const dispatch = useDispatch();
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
  const HeaderMenu = mainHeaderMenu.map(({ key, title }) => ({
    key,
    label: title,
  }));

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
        defaultSelectedKeys={['공지사항']}
        items={HeaderMenu}
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
  );
};
