import { fireEvent, render, waitFor } from "@testing-library/react";
import LoginPage from "../login-page";
import { act } from "react-test-renderer";

const mockPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockPush
  })
}));

describe("# loginPage", () => {
  it("should render initial login page", () => {
    const { getByTestId, getByText } = render(<LoginPage />);

    expect(getByTestId("login-form")).toBeInTheDocument();
    expect(getByText("登 录")).toBeInTheDocument();
    expect(getByText("立即注册!")).toBeInTheDocument();
  });

  it("should loading after click login button", async () => {
    const { getByTestId, getByText } = render(<LoginPage />);

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "123434" } });
      fireEvent.change(getByTestId("password"), { target: { value: "1234" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(() => {
      expect(getByText("正在登录...")).toBeInTheDocument();
    }, { timeout: 1000000 });
  });

  it("should login success, when name and password is right", async () => {
    const { getByTestId } = render(<LoginPage />);

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "admin200" } });
      fireEvent.change(getByTestId("password"), { target: { value: "111111" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalled();
    }, { timeout: 1000000 });
  });

  it("should login failed, when name and password is false", async () => {
    const { getByTestId, getByText } = render(<LoginPage />);

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "123434" } });
      fireEvent.change(getByTestId("password"), { target: { value: "1234" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(() => {
      expect(getByText("请求错误，请稍后重试")).toBeInTheDocument();
    }, { timeout: 1000000 });
  });
});
