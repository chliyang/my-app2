import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import { ISubmitData } from "../../../components/login-register-form";
import useRegisterPage from "./use-register-page";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

const mockHttp = jest.fn();
jest.mock("../../../utils/http/request", () => () => mockHttp());

describe("useRegisterPage", () => {
  const mockSubmitData: ISubmitData = {
    username: "user name",
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
      expect(result.current.loading).toBe("正在注册...");
    });
    await waitFor(() => {
      expect(result.current.loading).toBe("注册成功, 为您自动跳转登录页面");
    });
  });

  it("should login failed", async () => {
    mockHttp.mockImplementation(() => Promise.reject(new Error("error")));
    const { result } = renderHook(useRegisterPage);

    act(() => {
      result.current.handleRegister(mockSubmitData);
    });

    await waitFor(() => {
      expect(result.current.loading).toBe("正在注册...");
    });
    await waitFor(() => {
      expect(result.current.loading).toBe("注册失败, Error: error");
    });
  });
});
