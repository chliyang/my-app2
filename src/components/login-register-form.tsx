import React from "react";
import { Button, Form, Input } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";

export interface ILoginRegisterFormProps {
  loadingMessage: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  title?: string;
  isLogin?: boolean;
  inputClassName?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber?: React.Dispatch<React.SetStateAction<string>>;
}

const LoginRegisterForm: React.FC<ILoginRegisterFormProps> = ({
  loadingMessage,
  setUsername,
  setPassword,
  title,
  isLogin = false,
  handleSubmit,
  setEmail,
  setPhoneNumber,
  inputClassName
}) => {
  return (
    <Form
      name="my-form"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
    >
      {title && (
        <div className="text-xl text-blue-700 flex justify-center mb-4">
          {title}
        </div>
      )}
      <Form.Item
        name="用户名"
        rules={[
          { required: true, message: "请输入用户名!" },
          { type: "string", min: 6, message: "用户名长度不小于6" }
        ]}
      >
        <Input
          data-testid="user-name"
          className={inputClassName}
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
          data-testid="password"
          className={inputClassName}
          prefix={<LockOutlined className="site-form-item-icon" />}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      {!isLogin && (
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请二次确认您的密码"
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("密码") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次输入的密码不一致!"));
              }
            })
          ]}
        >
          <Input
            data-testid="password-confirm"
            className={inputClassName}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请二次确认您的密码"
          />
        </Form.Item>
      )}

      {!isLogin && (
        <Form.Item
          name="email"
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
            data-testid="email"
            className={inputClassName}
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="请输入邮箱地址"
            onChange={(e) => setEmail?.(e.target.value)}
          />
        </Form.Item>
      )}
      {!isLogin && (
        <Form.Item
          name="phone"
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
            data-testid="phone"
            className={inputClassName}
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="请输入您的电话号码"
            onChange={(e) => setPhoneNumber?.(e.target.value)}
          />
        </Form.Item>
      )}
      <Form.Item>
        <Button
          data-testid="submit-button"
          type="primary"
          htmlType="submit"
          className="login-form-button w-40 h-10 ml-24 text-lg"
        >
          {isLogin
            ? "登 录"
            : "立即注册"}
        </Button>
        {loadingMessage === "" && isLogin && (
          <div className="text-lg mt-6">
            或者 <a href="/register">立即注册!</a>
          </div>
        )}
      </Form.Item>
      <div className="text-lg text-blue-500 -mt-2">{loadingMessage}</div>
    </Form>
  );
};

export default LoginRegisterForm;
