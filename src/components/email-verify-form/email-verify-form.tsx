import {
  MailOutlined
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { LoginRegisterFormRules } from "../constants/rules-constants";

interface IEmailVerifyFormProps {
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
  handleEmailVerify: (email: string) => void,
}

const EmailVerifyForm: React.FC<IEmailVerifyFormProps> = ({ isLoading, isError, errorMessage, handleEmailVerify }) => {
  const [email, setEmail] = useState<string>("");
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Form
      form={form}
      name="email-verify-form"
      onFinish={() => handleEmailVerify(email)}
    >
      <Form.Item name="verify-email" rules={LoginRegisterFormRules.emailRules}>
        <Input
          data-testid="verify-email"
          className="h-16 w-full text-lg"
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Please enter email address for verification"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item shouldUpdate className="text-center">
        {() => (<Button
          data-testid="verify-button"
          type="primary"
          htmlType="submit"
          loading={isLoading}
          disabled={
            !form.isFieldsTouched(true) ||
            !!form.getFieldsError().filter(({ errors }) => errors.length).length
          }
          className="login-form-button w-40 h-10 text-lg"
        >
          Verify
        </Button>)}
      </Form.Item>
      {isError && <div className="text-lg text-red-500 -mt-2">{errorMessage}</div>}
    </Form >
  );
};

export default EmailVerifyForm;
