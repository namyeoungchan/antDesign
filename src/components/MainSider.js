import Sider from 'antd/es/layout/Sider';
import { Menu, theme } from 'antd';
import React from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const MainSider = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // const selectMenu = HEADER_MENU.BOARD;
  // const selectedMenu = mainHeaderMenu.map(({ sideList }) => {
  //   return sideList;
  // });

  const siderMenu = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
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

  return (
    <Sider
      width={200}
      style={{
        background: colorBgContainer,
      }}
    >
      <Menu
        mode="inline"
        style={{
          height: '100%',
          borderRight: 0,
        }}
        items={siderMenu}
      />
    </Sider>
  );
};
