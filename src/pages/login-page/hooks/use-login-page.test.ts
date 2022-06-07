import { ISubmitData } from "./../../../components/login-register-form";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import useLoginPage from "./use-login-page";

const mockPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockPush
  })
}));

const mockHttp = jest.fn();
jest.mock("../../../utils/http/request", () => () => mockHttp());

describe("useLoginPage", () => {
  const mockSubmitData: ISubmitData = {
    name: "user name",
    password: "password"
  };
  it("should login success", async () => {
    mockHttp.mockImplementation(() =>
      Promise.resolve({
        data: mockSubmitData
      })
    );
    // mockHttpRequest.getMockImplementation();
    const { result } = renderHook(useLoginPage);

    act(() => {
      result.current.handleLogin(mockSubmitData);
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBeTruthy();
    });
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalled();
    });
  });

  it("should login failed", async () => {
    mockHttp.mockImplementation(() => Promise.reject(new Error("error")));
    // mockHttpRequest.getMockImplementation();
    const { result } = renderHook(useLoginPage);

    act(() => {
      result.current.handleLogin(mockSubmitData);
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBeTruthy();
    });
    await waitFor(() => {
      expect(result.current.isError).toBeTruthy();
    });
  });
});
