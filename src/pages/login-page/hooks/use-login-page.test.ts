import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import useLoginPage from "./use-login-page";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

const mockHttp = jest.fn();

jest.mock("../../../utils/http/request", () => () => mockHttp());
describe("useLoginPage", () => {
  it("should login success", async () => {
    mockHttp.mockImplementation(() =>
      Promise.resolve({
        data: { username: "user name", password: "password" }
      })
    );
    // mockHttpRequest.getMockImplementation();
    const { result } = renderHook(useLoginPage);

    act(() => {
      result.current.setUsername("user name");
      result.current.setPassword("password");
      result.current.handleLogin();
    });

    await waitFor(() => {
      expect(result.current.loading).toBe("正在登录...");
    });
    await waitFor(() => {
      expect(result.current.loading).toBe("登录成功");
    });
  });

  it("should login failed", async () => {
    mockHttp.mockImplementation(() => Promise.reject(new Error("error")));
    // mockHttpRequest.getMockImplementation();
    const { result } = renderHook(useLoginPage);

    act(() => {
      result.current.setUsername("user name");
      result.current.setPassword("password");
      result.current.handleLogin();
    });

    await waitFor(() => {
      expect(result.current.loading).toBe("正在登录...");
    });
    await waitFor(() => {
      expect(result.current.loading).toBe("登录失败, Error: error");
    });
  });
});
