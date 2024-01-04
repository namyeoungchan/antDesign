import { Breadcrumb, List, theme } from 'antd';
import React from 'react';
import { Content } from 'antd/es/layout/layout';

export const MainContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const data = [
    {
      title: '공지 1',
      content: '이것은 첫 번째 공지입니다.',
      writer: '',
    },
    {
      title: '공지 2',
      content: '이것은 두 번째 공지입니다.',
    },
    {
      title: '공지 3',
      content: '이것은 세 번째 공지입니다.',
    },
  ];

  return (
    <>
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
        <List
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.title} extra={<div>{item.content}</div>}>
              <List.Item.Meta title={<a href="#">{item.title}</a>} />
            </List.Item>
          )}
        />
      </Content>
    </>
  );
};
