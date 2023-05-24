import React,{useState} from 'react';
import { Form, Input, Button } from 'antd';
import commonFetch from '../comLib/CommonFetch.js';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
  const [mode, setMode] = useState('Login');
  let content = "";
  const navigate = useNavigate();
  const onFinish = async (values) => {
let parameter = {"method":"POST","body":values}
 commonFetch("http://localhost:8080/loginUser", parameter).then(result => {
  // result 값 처리
if(result.code==='200'){
// 쿠키 저장
localStorage.setItem('authCookie', result.sessionId);
console.log(result.sessionId)
// 세션 ID 저장
localStorage.setItem('SESSION_ID', result.sessionId);
  alert('로그인되었습니다.');
    navigate('/main');
}else {
  alert(result.message);
}


})
.catch(error => {
  // 에러 처리
  console.log(error);
});
  }
  const signIn = async (values) => {
    let parameter = {"method":"POST","body":values}
    commonFetch("http://localhost:8080/signIn" , parameter).then(result =>{
      console.log(result.message);
      alert(result.message);
      if(result.code==='200'){
        setMode("Login");
      }else{
        alert(result.message);
      }
    })
    .catch(error => {
      alert(error);
      console.log(error);
    })
  }

if(mode==="Login"){
  content= <Form
  name="centerForm"
  onFinish={onFinish}
  initialValues={{
    remember: true,
  }}
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 폼 배경 색상 지정
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', // 그림자 효과 추가
    maxWidth: '500px', // 폼의 최대 너비 지정
  }}
>
  {/* 폼 내용 */}
  <Form.Item
    label="username"
    name="username"
    rules={[
      {
        required: true,
        message: '아이디를 입력해주세요!!',
      },
    ]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Password"
    name="password"
    rules={[
      {
        required: true,
        message: '비밀번호를 입력해주세요!',
      },
    ]}
  >
    <Input.Password />
  </Form.Item>

  <Form.Item wrapperCol={{ offset: 1, span: 20 }}>
    <Button type="primary" htmlType="submit" style={{width:'300px'}}>
      로그인
    </Button>
  </Form.Item>
  <Form.Item wrapperCol={{ offset: 1, span: 20 }} style={{height:'1px'}}>
  <Button onClick={(event)=>{
      event.preventDefault();
      setMode("signIn");
      }
      } style={{width:'300px'}}>
      회원가입
    </Button>   
  </Form.Item>
</Form>;
}else if(mode==="signIn"){
content = <Form name="centerForm"
  onFinish={signIn}
  initialValues={{
    remember: true,
  }}
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 폼 배경 색상 지정
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', // 그림자 효과 추가
    maxWidth: '500px', // 폼의 최대 너비 지정
  }}
>
  {/* 폼 내용 */}
  <Form.Item
    label="username"
    name="userId"
    rules={[
      {
        required: true,
        message: '아이디를 입력해주세요!!',
      },
    ]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Password"
    name="userPw"
    rules={[
      {
        required: true,
        message: '비밀번호를 입력해주세요!',
      },
    ]}
  >
    <Input.Password />
  </Form.Item>
  <Form.Item wrapperCol={{ offset: 1, span: 20 }}>
    <Button type="primary" htmlType="submit" style={{width:'300px'}}>
      회원가입
    </Button>
  </Form.Item>
  
   </Form>; 
}

  
  return (
    <div
      style={{
        backgroundColor: '#E6F7FF', 
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
     {content}
      
    </div>
  );
}
export default LoginPage;
