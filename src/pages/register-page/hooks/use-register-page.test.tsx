import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import { ISubmitData } from "../../../components/login-register-form/login-register-form";
import useRegisterPage from "./use-register-page";

const mockPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockPush
  })
}));

const mockHttp = jest.fn();
jest.mock("../../../utils/http/request", () => () => mockHttp());

describe("useRegisterPage", () => {
  const mockSubmitData: ISubmitData = {
    name: "user name",
    password: "password"
  };
  it("should register success", async () => {
    mockHttp.mockImplementation(() =>
      Promise.resolve({
        data: mockSubmitData
      })
    );
    const { result } = renderHook(useRegisterPage);

    act(() => {
      result.current.handleRegister(mockSubmitData);
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBeTruthy();
    });
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalled();
    });
  });

  it("should register failed", async () => {
    mockHttp.mockImplementation(() => Promise.reject(new Error("error")));
    const { result } = renderHook(useRegisterPage);

    act(() => {
      result.current.handleRegister(mockSubmitData);
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBeTruthy();
    });
    await waitFor(() => {
      expect(result.current.isError).toBeTruthy();
    });
  });
});
