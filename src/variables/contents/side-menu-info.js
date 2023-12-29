import { HEADER_MENU } from '../enums/content-enum';
import { headerMenu } from '../enums/menu-enum';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const mainHeaderMenu = [
  {
    key: HEADER_MENU.BOARD,
    title: headerMenu.BOARD,
    sideList: [
      {
        key: `mainBoard`,
        icon: UserOutlined,
        label: `매장공지`,
        children: [
          {
            key: 'storeBoard',
            label: `공지사항`,
          },
          {
            key: 'launchBoard',
            label: `식단공지(점심)`,
          },
        ],
      },
    ],
    list: '각 메뉴 리스트 url',
  },
  {
    key: HEADER_MENU.STORE_MANAGEMENT,
    title: headerMenu.STORE_MANAGEMENT,
    sideList: [
      {
        key: `mainBoard`,
        icon: LaptopOutlined,
        label: `매장공지`,
        children: [
          {
            key: 'storeBoard',
            label: `공지사항`,
          },
          {
            key: 'launchBoard',
            label: `식단공지(점심)`,
          },
        ],
      },
    ],
    list: '각 메뉴 리스트 url',
  },
  {
    key: HEADER_MENU.USER_MANAGEMENT,
    title: headerMenu.USER_MANAGEMENT,
    sideList: [
      {
        key: `mainBoard`,
        icon: NotificationOutlined,
        label: `매장공지`,
        children: [
          {
            key: 'storeBoard',
            label: `공지사항`,
          },
          {
            key: 'launchBoard',
            label: `식단공지(점심)`,
          },
        ],
      },
    ],
    list: '각 메뉴 리스트 url',
  },
];
