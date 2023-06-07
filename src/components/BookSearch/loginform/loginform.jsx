'use client'
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (<div>
    
   
     <Form
  
  
    wrapperCol={{
      span: 24,
      
    }}
    style={{
      maxWidth: 800,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
   
      
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input placeholder="email"/>
    </Form.Item>

    <Form.Item
      
    
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password placeholder="password"/>
    </Form.Item>

   
      

    <Form.Item
      wrapperCol={{
        offset: 12,
        span: 24,
      }}
    >
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form></div>
 
);
export default Login;