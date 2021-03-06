import React, { useEffect, useState } from "react";
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
import { LoginRegisterFormRules } from "../constants/rules-constants";

export interface ISubmitData {
  name: string,
  password: string,
  email?: string,
  verifyCode?: string
}

export interface ILoginRegisterFormProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
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
  title,
  isLoading,
  errorMessage,
  isError,
  isLogin = false,
  handleSubmit,
  inputClassName
}) => {
  const [submitData, setSubmitData] = useState<ISubmitData>({ name: "", password: "" });
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
      placeholder: "Please enter user name",
      onChange: (e) => setSubmitData((preState) => ({
        ...preState,
        name: e.target.value
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
      placeholder: "Please enter password",
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
      placeholder: "Please confirm password"
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
      placeholder: "Please enter email address",
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
      placeholder: "Please enter verification code obtained from email",
      onChange: (e) => setSubmitData((preState) => ({
        ...preState,
        verifyCode: e.target.value
      }))
    }
  ];

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Form
      form={form}
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
      <Form.Item shouldUpdate className="text-center">
        {() => (<Button
          data-testid="submit-button"
          type="primary"
          htmlType="submit"
          className="login-form-button w-40 h-10 text-lg"
          loading={isLoading}
          disabled={
            !form.isFieldsTouched(true) ||
            !!form.getFieldsError().filter(({ errors }) => errors.length).length
          }
        >
          {isLogin
            ? "Login"
            : "Register"}
        </Button>)}
      </Form.Item>
      {!isLoading && !isError && isLogin && (
        <div className="text-lg mt-6 text-left">
          Or <a href="/register">sign up</a>
        </div>
      )}
      {
        isLoading && <div className="text-lg text-blue-500 -mt-2">
          Loading
        </div>
      }
      {
        isError && <div className="text-lg text-red-500 -mt-2">{errorMessage}</div>
      }
    </Form>
  );
};

export default LoginRegisterForm;
