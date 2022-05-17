import { Button, Form, Input } from "antd";
import React from "react";
import useRegisterPage from "./hooks/use-register-page";
import styles from "./register-page.module.scss";

const formItemLayout = {
  labelCol: {
    xs: { span: 4 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

const RegisterPage: React.FC = () => {
  const {
    loading,
    setEmail,
    setPassword,
    setPhoneNumber,
    setUsername,
    handleRegister
  } = useRegisterPage();
  return (
    <div className={styles.register}>
      <Form
        {...formItemLayout}
        name="normal_register"
        className="register-form"
        initialValues={{ remember: true }}
        onFinish={handleRegister}
      >
        <h1 className={styles.title}>注册信息填写</h1>
        <Form.Item
          name="name"
          label="用户名"
          rules={[
            {
              required: true,
              message: "请设置您的用户名!",
              whitespace: true
            }
          ]}
        >
          <Input
            placeholder="请设置您的用户名"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              type: "email",
              message: "请输入正确的邮箱地址！"
            },
            {
              required: true,
              message: "请输入邮箱地址！"
            }
          ]}
        >
          <Input
            placeholder="请输入邮箱地址"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: "请设置您的密码"
            }
          ]}
          hasFeedback
        >
          <Input
            type="password"
            placeholder="请设置您的密码"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请二次确认您的密码"
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次输入的密码不一致!"));
              }
            })
          ]}
        >
          <Input type="password" placeholder="请二次确认您的密码" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="电话号码"
          rules={[
            {
              required: true,
              message: "请输入您的电话号码"
            },
            {
              max: 11,
              message: " 请输入正确的电话号码"
            }
          ]}
        >
          <Input
            placeholder="请输入您的电话号码"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            立即注册
          </Button>
        </Form.Item>
        <div>{loading}</div>
      </Form>
    </div>
  );
};

export default RegisterPage;
