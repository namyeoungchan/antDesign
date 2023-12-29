import Sider from 'antd/es/layout/Sider';
import { Menu, theme } from 'antd';
import React from 'react';
import { mainHeaderMenu } from '../variables/contents/side-menu-info';
import { HEADER_MENU } from '../variables/enums/content-enum';
import { menuUrlNav } from '../variables/contents/menu-url-nav';

export const MainSider = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const selected = HEADER_MENU.BOARD;
  const selectSideMenu = mainHeaderMenu.find(
    ({ key }) => key === selected,
  ).sideList;

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
        onClick={(item) => {
          console.log(menuUrlNav[item.key]);
        }}
        items={selectSideMenu}
      />
    </Sider>
  );
};
