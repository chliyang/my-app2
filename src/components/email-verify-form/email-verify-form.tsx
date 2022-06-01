import {
  MailOutlined
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { LoginRegisterFormRules } from "../constants/rules-constants";

interface IEmailVerifyFormProps {
  verifyResultMessage: string,
  handleEmailVerify: (email: string) => void,
}

const EmailVerifyForm: React.FC<IEmailVerifyFormProps> = ({ verifyResultMessage, handleEmailVerify }) => {
  const [email, setEmail] = useState<string>("");

  return (
    <Form
      name="email-verify-form"
      onFinish={() => handleEmailVerify(email)}
    >
      <Form.Item name="verify-email" rules={LoginRegisterFormRules.emailRules}>
        <Input
          data-testid="verify-email"
          className="h-16 w-full text-lg"
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="请输入您的邮箱"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item className="text-center">
        <Button
          data-testid="verify-button"
          type="primary"
          htmlType="submit"
          className="login-form-button w-40 h-10 text-lg"
        >
          开始验证
        </Button>
      </Form.Item>
      <div className="text-lg text-blue-500 -mt-2">{verifyResultMessage}</div>
    </Form >
  );
};

export default EmailVerifyForm;
