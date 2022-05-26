import { fireEvent, render, waitFor } from "@testing-library/react";
import LoginPage from "../login-page";
import { act } from "react-test-renderer";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("# loginPage", () => {
  it("should render initial login page", () => {
    const { getByTestId, getByText } = render(<LoginPage />);

    expect(getByTestId("login-form")).toBeInTheDocument();
    expect(getByText(/登 录/i)).toBeInTheDocument();
    expect(getByText(/立即注册/i)).toBeInTheDocument();
  });

  it("should loading after click login button", async () => {
    const { getByTestId, getByText } = render(<LoginPage />);

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "123434" } });
      fireEvent.change(getByTestId("password"), { target: { value: "1234" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(() => {
      expect(getByText(/正在登录/i)).toBeInTheDocument();
    }, { timeout: 1000000 });
  });

  it("should login success, when name and password is right", async () => {
    const { getByTestId, getByText } = render(<LoginPage />);

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "admin200" } });
      fireEvent.change(getByTestId("password"), { target: { value: "111111" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(() => {
      expect(getByText(/登录成功/i)).toBeInTheDocument();
    }, { timeout: 1000000 });
  });

  it("should login success, when name and password is right", async () => {
    const { getByTestId, getByText } = render(<LoginPage />);

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "123434" } });
      fireEvent.change(getByTestId("password"), { target: { value: "1234" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(() => {
      expect(getByText(/密码错误/i)).toBeInTheDocument();
    }, { timeout: 1000000 });
  });
});
