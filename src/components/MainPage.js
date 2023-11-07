import React, { useEffect } from "react";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import commonFetch from "../comLib/CommonFetch";

const { Header, Content, Footer } = Layout;
const headerMenu = ["회원관리", "상품관리"].map((key) => ({
  key,
  label: ` ${key}`,
}));

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let parameter = { method: "GET" };
    commonFetch("http://localhost:8080/chkSession", parameter)
      .then((result) => {
        // result 값 처리
        console.log(result.message);
        if (result.message === "Access Denied") {
          alert("로그인이 필요합니다.");
          navigate("/login");
        } else {
          alert("result::::::" + result);
        }
      })
      .catch((error) => {
        // 에러 처리
        alert("관리자 문의 부탁드립니다.");
        navigate("/login");
        console.log(error);
      });
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={headerMenu}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          ></Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
