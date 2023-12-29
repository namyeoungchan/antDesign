import React from 'react';
import { Layout } from 'antd';
import { MainHeader } from './MainHeader';
import { MainSider } from './MainSider';
import { MainContent } from './content/MainContent';

const App = () => {
  return (
    <Layout>
      <MainHeader />
      <Layout>
        <MainSider />
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <MainContent />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
