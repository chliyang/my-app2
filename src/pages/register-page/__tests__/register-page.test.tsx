import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import RegisterPage from "../register-page";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("# loginPage", () => {
  it("should render initial register page", () => {
    const { getByTestId, getByText } = render(<RegisterPage />);

    expect(getByTestId("register-form")).toBeInTheDocument();
    expect(getByText("注册信息填写")).toBeInTheDocument();
    expect(getByText("立即注册")).toBeInTheDocument();
  });

  it("should loading after click register button", async () => {
    const { getByTestId, getByText } = render(<RegisterPage />);

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "123434" } });
      fireEvent.change(getByTestId("password"), { target: { value: "1234" } });
      fireEvent.change(getByTestId("password-confirm"), { target: { value: "1234" } });
      fireEvent.change(getByTestId("email"), { target: { value: "1234@234.com" } });
      fireEvent.change(getByTestId("phone"), { target: { value: "123423" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(() => {
      expect(getByText("正在注册...")).toBeInTheDocument();
    }, { timeout: 1000000 });
  });

  it("should register success, when validate success", async () => {
    const { getByTestId, getByText } = render(<RegisterPage />);

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "123434" } });
      fireEvent.change(getByTestId("password"), { target: { value: "1234" } });
      fireEvent.change(getByTestId("password-confirm"), { target: { value: "1234" } });
      fireEvent.change(getByTestId("email"), { target: { value: "1234@234.com" } });
      fireEvent.change(getByTestId("phone"), { target: { value: "123423" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(() => {
      expect(getByText("注册成功, 为您自动跳转登录页面")).toBeInTheDocument();
    }, { timeout: 1000000 });
  });
});
