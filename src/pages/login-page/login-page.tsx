import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import useLoginPage from "./hooks/use-login-page";
import styles from "./login-page.module.scss";

const LoginPage: React.FC = () => {
  const { loading, setPassword, setUsername, handleLogin } = useLoginPage();
  return (
    <div className={styles.login}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
      >
        <Form.Item
          name="用户名"
          rules={[
            { required: true, message: "请输入用户名!" },
            { type: "string", min: 6, message: "用户名长度不小于6" }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="请输入用户名"
          />
        </Form.Item>
        <Form.Item
          name="密码"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          或者 <a href="/register">立即注册!</a>
        </Form.Item>
        <div>{loading}</div>
      </Form>
    </div>
  );
};

export default LoginPage;
