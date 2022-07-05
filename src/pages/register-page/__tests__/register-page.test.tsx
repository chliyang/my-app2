import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import RegisterPage from "../register-page";

const mockPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockPush
  })
}));

const mockHttp = jest.fn();
jest.mock("../../../utils/http/request", () => () => mockHttp());

describe("# RegisterPage", () => {
  let originConsoleError: any;
  beforeAll(() => {
    originConsoleError = console.error;
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originConsoleError;
  });

  it("should render initial register page", () => {
    const { getByTestId, getByText } = render(<RegisterPage />);

    expect(getByTestId("register-form")).toBeInTheDocument();
    expect(getByText("Verify")).toBeInTheDocument();
  });

  it("should jump to register step, when verify success", async () => {
    mockHttp.mockImplementation(() =>
      Promise.resolve({
        data: {}
      })
    );
    const { getByTestId, getByText } = render(<RegisterPage />);

    act(() => {
      fireEvent.change(getByTestId("verify-email"), { target: { value: "123@345.com" } });
      fireEvent.click(getByText("Verify"));
    });

    await waitFor(() => {
      expect(getByTestId("user-name")).toBeInTheDocument();
    });
  });

  it("should show error message, when verify failed", async () => {
    mockHttp.mockImplementation(() =>
      Promise.reject(new Error("Error"))
    );
    const { getByTestId, getByText } = render(<RegisterPage />);

    act(() => {
      fireEvent.change(getByTestId("verify-email"), { target: { value: "123@345.com" } });
      fireEvent.click(getByText("Verify"));
    });

    await waitFor(() => {
      expect(getByTestId("verify-error")).toBeInTheDocument();
    });
  });

  it("should loading after click register button", async () => {
    mockHttp.mockImplementationOnce(() =>
      Promise.resolve({
        data: {}
      })
    );
    const { getByTestId, getByText } = render(<RegisterPage />);

    act(() => {
      fireEvent.change(getByTestId("verify-email"), { target: { value: "123@345.com" } });
      fireEvent.click(getByText("Verify"));
    });

    await waitFor(() => {
      expect(getByTestId("user-name")).toBeInTheDocument();
    });

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "123434" } });
      fireEvent.change(getByTestId("password"), { target: { value: "1234" } });
      fireEvent.change(getByTestId("password-confirm"), { target: { value: "1234" } });
      fireEvent.change(getByTestId("email"), { target: { value: "1234@234.com" } });
      fireEvent.change(getByTestId("verify-code"), { target: { value: "123456" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(() => {
      expect(getByText("Loading")).toBeInTheDocument();
    }, { timeout: 1000000 });
  });

  it("should register success, when validate success", async () => {
    mockHttp.mockImplementationOnce(() =>
      Promise.resolve({
        data: {}
      })
    ).mockImplementationOnce(() => Promise.resolve({
      data: {}
    }));
    const { getByTestId, getByText } = render(<RegisterPage />);

    act(() => {
      fireEvent.change(getByTestId("verify-email"), { target: { value: "123@345.com" } });
      fireEvent.click(getByText("Verify"));
    });

    await waitFor(() => {
      expect(getByTestId("user-name")).toBeInTheDocument();
    });

    act(() => {
      fireEvent.change(getByTestId("user-name"), { target: { value: "123434" } });
      fireEvent.change(getByTestId("password"), { target: { value: "1234" } });
      fireEvent.change(getByTestId("password-confirm"), { target: { value: "1234" } });
      fireEvent.change(getByTestId("email"), { target: { value: "1234@234.com" } });
      fireEvent.change(getByTestId("verify-code"), { target: { value: "123456" } });

      fireEvent.click(getByTestId("submit-button"));
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalled();
    }, { timeout: 1000000 });
  });
});
