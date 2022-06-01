import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import LoginRegisterForm, { ILoginRegisterFormProps } from "../login-register-form";

describe("# loginRegisterForm", () => {
  const mockHandleSubmit = jest.fn();
  const mockLoginRegisterFormProps: ILoginRegisterFormProps = {
    loadingMessage: "loading...",
    handleSubmit: mockHandleSubmit()
  };

  it("should render common UI", () => {
    const { getByTestId, getByText } = render(
      <LoginRegisterForm {...mockLoginRegisterFormProps} isLogin={true} />
    );

    expect(getByTestId("user-name")).toBeInTheDocument();
    expect(getByTestId("password")).toBeInTheDocument();
    expect(getByText("登 录")).toBeInTheDocument();
  });

  it("should render other input when show flag is true", () => {
    const { getByTestId } = render(
      <LoginRegisterForm {...mockLoginRegisterFormProps} />
    );

    expect(getByTestId("user-name")).toBeInTheDocument();
    expect(getByTestId("password")).toBeInTheDocument();
    expect(getByTestId("password-confirm")).toBeInTheDocument();
    expect(getByTestId("email")).toBeInTheDocument();
    expect(getByTestId("verify-code")).toBeInTheDocument();
  });

  it("should show require message after click submit button, when input nothing", async () => {
    const { getByTestId, getByText } = render(
      <LoginRegisterForm {...mockLoginRegisterFormProps} />
    );

    act(() => {
      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(
      () => {
        expect(getByText("请输入用户名!")).toBeInTheDocument();
      }
    );
    expect(getByText("请输入密码!")).toBeInTheDocument();
    expect(getByText("请二次确认您的密码")).toBeInTheDocument();
    expect(getByText("请输入邮箱地址！")).toBeInTheDocument();
    expect(getByText("请输入您的验证码")).toBeInTheDocument();
  });

  it("should show error message, when input wrong", async () => {
    const { getByTestId, getByText } = render(
      <LoginRegisterForm {...mockLoginRegisterFormProps} />
    );

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "1234" } });
      fireEvent.change(getByTestId("password"), { target: { value: "1234" } });
      fireEvent.change(getByTestId("password-confirm"), { target: { value: "4567" } });
      fireEvent.change(getByTestId("email"), { target: { value: "1234@234" } });
      fireEvent.change(getByTestId("verify-code"), { target: { value: "12345623" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(
      () => {
        expect(getByText("用户名长度不小于6")).toBeInTheDocument();
      }
    );
    expect(getByText("两次输入的密码不一致!")).toBeInTheDocument();
    expect(getByText("请输入正确的邮箱地址！")).toBeInTheDocument();
    expect(getByText("请输入六位验证码")).toBeInTheDocument();
  });
});
