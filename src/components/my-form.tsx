import React from "react";
import { Button, Form, Input } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";

interface IMyFormProps {
  loading: string;
  buttonText: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  title?: string,
  isLogin?: boolean,
  inputClassName?: string,
  showConfirmPassword?: boolean,
  showEmail?: boolean,
  showPhone?: boolean,
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber?: React.Dispatch<React.SetStateAction<string>>;
}

const MyForm: React.FC<IMyFormProps> = ({
  loading,
  buttonText,
  setUsername,
  setPassword,
  title,
  isLogin = false,
  showConfirmPassword = false,
  showEmail = false,
  showPhone = false,
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
      {title && <h1>{title}</h1>}
      <Form.Item
        name="用户名"
        rules={[
          { required: true, message: "请输入用户名!" },
          { type: "string", min: 6, message: "用户名长度不小于6" }
        ]}
      >
        <Input
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
          className={inputClassName}
          prefix={<LockOutlined className="site-form-item-icon" />}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      {showConfirmPassword && <Form.Item
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
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("两次输入的密码不一致!"));
            }
          })
        ]}
      >
        <Input
          className={inputClassName}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请二次确认您的密码"
        />
      </Form.Item>}

      {showEmail && <Form.Item
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
          className={inputClassName}
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="请输入邮箱地址"
          onChange={(e) => setEmail?.(e.target.value)}
        />
      </Form.Item>}
      {showPhone && <Form.Item
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
          className={inputClassName}
          prefix={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="请输入您的电话号码"
          onChange={(e) => setPhoneNumber?.(e.target.value)}
        />
      </Form.Item>}
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button w-40 h-10 ml-24 text-lg">
          {buttonText}
        </Button>
        {isLogin && <div className="text-lg mt-6">
          或者 <a href="/register">立即注册!</a>
        </div>}
      </Form.Item>
      <div>{loading}</div>
    </Form>
  );
};

export default MyForm;
