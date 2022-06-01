import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  NumberOutlined
} from "@ant-design/icons";
import { NamePath } from "antd/lib/form/interface";
import { Rule } from "antd/lib/form";
import { LiteralUnion } from "antd/lib/_util/type";
import { LoginRegisterFormRules } from "./constants/rules-constants";

export interface ISubmitData {
  username: string,
  password: string,
  email?: string,
  verifyCode?: string
}

export interface ILoginRegisterFormProps {
  loadingMessage: string;
  handleSubmit: (data: ISubmitData) => void;
  title?: string;
  isLogin?: boolean;
  inputClassName?: string;
}

interface IFormItemConfig {
  alwaysShow: boolean,
  hasFeedback: boolean,
  formItemName: string,
  formItemDependencies: NamePath[],
  formItemRules: Rule[],
  testId: string,
  type: LiteralUnion<'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week', string>,
  prefix: React.ReactNode,
  placeholder: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const LoginRegisterForm: React.FC<ILoginRegisterFormProps> = ({
  loadingMessage,
  title,
  isLogin = false,
  handleSubmit,
  inputClassName
}) => {
  const [submitData, setSubmitData] = useState<ISubmitData>({ username: "", password: "" });
  const formItemConfigs: IFormItemConfig[] = [
    {
      alwaysShow: true,
      hasFeedback: false,
      formItemName: "username",
      formItemDependencies: [],
      formItemRules: LoginRegisterFormRules.userNameRules,
      testId: "user-name",
      type: "",
      prefix: <UserOutlined className="site-form-item-icon" />,
      placeholder: "请输入用户名",
      onChange: (e) => setSubmitData((preState) => ({
        ...preState,
        username: e.target.value
      }))
    },
    {
      alwaysShow: true,
      hasFeedback: false,
      formItemName: "password",
      formItemDependencies: [],
      formItemRules: LoginRegisterFormRules.passwordRules,
      testId: "password",
      type: "password",
      prefix: <LockOutlined className="site-form-item-icon" />,
      placeholder: "请输入密码",
      onChange: (e) => setSubmitData((preState) => ({
        ...preState,
        password: e.target.value
      }))
    },
    {
      alwaysShow: false,
      hasFeedback: true,
      formItemName: "confirm",
      formItemDependencies: ["password"],
      formItemRules: LoginRegisterFormRules.confirmPasswordRules,
      testId: "password-confirm",
      type: "password",
      prefix: <LockOutlined className="site-form-item-icon" />,
      placeholder: "请二次确认您的密码"
    },
    {
      alwaysShow: false,
      hasFeedback: false,
      formItemName: "email",
      formItemDependencies: [],
      formItemRules: LoginRegisterFormRules.emailRules,
      testId: "email",
      type: "",
      prefix: <MailOutlined className="site-form-item-icon" />,
      placeholder: "请输入邮箱地址",
      onChange: (e) => setSubmitData((preState) => ({
        ...preState,
        email: e.target.value
      }))
    },
    {
      alwaysShow: false,
      hasFeedback: false,
      formItemName: "verify-code",
      formItemDependencies: [],
      formItemRules: LoginRegisterFormRules.verifyCodeRules,
      testId: "verify-code",
      type: "",
      prefix: <NumberOutlined className="site-form-item-icon" />,
      placeholder: "请输入邮箱验证所得验证码",
      onChange: (e) => setSubmitData((preState) => ({
        ...preState,
        verifyCode: e.target.value
      }))
    }
  ];
  return (
    <Form
      name="login-register-form"
      onFinish={() => handleSubmit(submitData)}
    >
      {title && (
        <div className="text-xl text-blue-700 flex justify-center mb-4">
          {title}
        </div>
      )}
      {formItemConfigs.map((item) => (
        (item.alwaysShow || !isLogin) && <Form.Item
          key={item.formItemName}
          name={item.formItemName}
          dependencies={item.formItemDependencies}
          rules={item.formItemRules}
          hasFeedback={item.hasFeedback}
        >
          <Input
            data-testid={item.testId}
            type={item.type}
            className={inputClassName}
            prefix={item.prefix}
            placeholder={item.placeholder}
            onChange={item.onChange}
          />
        </Form.Item>
      ))}
      <Form.Item className="text-center">
        <Button
          data-testid="submit-button"
          type="primary"
          htmlType="submit"
          className="login-form-button w-40 h-10 text-lg"
        >
          {isLogin
            ? "登 录"
            : "立即注册"}
        </Button>
        {loadingMessage === "" && isLogin && (
          <div className="text-lg mt-6 text-left">
            或者 <a href="/register">立即注册!</a>
          </div>
        )}
      </Form.Item>
      <div className="text-lg text-blue-500 -mt-2">{loadingMessage}</div>
    </Form>
  );
};

export default LoginRegisterForm;
