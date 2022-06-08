import { Rule } from "antd/lib/form";

interface ILoginRegisterFormRule {
  userNameRules: Rule[];
  passwordRules: Rule[];
  confirmPasswordRules: Rule[];
  emailRules: Rule[];
  verifyCodeRules: Rule[];
}
export const LoginRegisterFormRules: ILoginRegisterFormRule = {
  userNameRules: [
    { required: true, message: "User name cannot be empty" },
    {
      type: "string",
      min: 6,
      message: "Length of user name should more than 6"
    }
  ],
  passwordRules: [{ required: true, message: "Password cannot be empty" }],
  confirmPasswordRules: [
    {
      required: true,
      message: "Confirm password cannot be empty"
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("The entered passwords are inconsistent")
        );
      }
    })
  ],
  emailRules: [
    {
      type: "email",
      message: "Please enter valid email address"
    },
    {
      required: true,
      message: "Email address cannot be empty"
    }
  ],
  verifyCodeRules: [
    {
      required: true,
      message: "Verify code cannot be empty"
    },
    {
      len: 6,
      message: "The length of verify code is 6"
    }
  ]
};
