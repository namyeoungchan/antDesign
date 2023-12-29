import { HEADER_MENU } from '../enums/content-enum';
import { headerMenu } from '../enums/menu-enum';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';

export const mainHeaderMenu = [
  {
    key: HEADER_MENU.BOARD,
    title: headerMenu.BOARD,
    sideList: [
      {
        key: `mainBoard`,
        icon: <UserOutlined />,
        label: `매장공지`,
        children: [
          {
            key: 'storeBoard',
            label: `공지사항`,
            url: '/board/notice',
          },
          {
            key: 'launchBoard',
            label: `식단공지(점심)`,
            url: '/board/lunch-menu',
          },
        ],
      },
    ],
    url: '/board/notice',
  },
  {
    key: HEADER_MENU.STORE_MANAGEMENT,
    title: headerMenu.STORE_MANAGEMENT,
    sideList: [
      {
        key: `mainBoard`,
        icon: <LaptopOutlined />,
        label: `매장공지`,
        children: [
          {
            key: 'managementAdminBoard',
            label: `관리자 공지사항`,
            url: '/store-management/admin',
          },
          {
            key: 'managementUserBoard',
            label: `유저 공지사항`,
            url: '/store-management/user',
          },
        ],
      },
    ],
    url: '/board/notice',
  },
  {
    key: HEADER_MENU.USER_MANAGEMENT,
    title: headerMenu.USER_MANAGEMENT,
    sideList: [
      {
        key: `mainBoard`,
        icon: <NotificationOutlined />,
        label: `매장공지`,
        children: [
          {
            key: 'storeManagementAdmin',
            label: `관리자 공지사항`,
            url: '/user-management/admin',
          },
          {
            key: 'storeManagementUser',
            label: `유저 공지사항`,
            url: '/user-management/user',
          },
        ],
      },
    ],
    url: '/board/notice',
  },
];
