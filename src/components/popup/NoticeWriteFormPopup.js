// NoticeWriteFormPopup.js

import React from 'react';
import { Button, Form, Input } from 'antd';

const NoticeWriteFormPopup = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // 여기서 공지사항을 서버에 전송하거나 상태를 업데이트할 수 있습니다.
  };

  return (
    <Form name="noticeForm" onFinish={onFinish} layout="vertical">
      <Form.Item
        label="제목"
        name="title"
        rules={[{ required: true, message: '제목을 입력하세요!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="내용"
        name="content"
        rules={[{ required: true, message: '내용을 입력하세요!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NoticeWriteFormPopup;
