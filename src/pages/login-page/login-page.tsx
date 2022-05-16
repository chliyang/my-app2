import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import http from "../../utils/http/request";
import { authenticatedSuccess } from "../../utils/session";
import styles from "./login-page.module.scss";

const LoginPage = (props: any) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<string>("");
  const history = useHistory();

  const handleLogin = () => {
    setLoading("正在登录...");
    const data = { username, password };
    http("post", "/login", {}, data)
      .then((res) => {
        const data = res.data;
        authenticatedSuccess(data.token);
        setLoading("登录成功");
      })
      .then(() => {
        history.push("/home");
        // TODO: 应当自动刷新
        window.location.reload();
      })
      .catch((e) => {
        setLoading("登录失败, " + e);
      });
  };

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
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <a className={styles.forgot} href="">
            忘记密码？
          </a>
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
