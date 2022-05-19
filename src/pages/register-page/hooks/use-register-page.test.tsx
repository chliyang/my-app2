import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import http from "../../../utils/http/request";
import useRegisterPage from "./use-register-page";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

jest.mock("../../../utils/http/request", () => jest.fn());
describe("useRegisterPage", () => {
  it("should register success", async () => {
    http.mockImplementation(() =>
      Promise.resolve({
        data: { username: "user name", password: "password" }
      })
    );
    const { result } = renderHook(useRegisterPage);

    act(() => {
      result.current.handleRegister();
    });

    await waitFor(() => {
      expect(result.current.loading).toBe("正在注册...");
    });
    await waitFor(() => {
      expect(result.current.loading).toBe("注册成功, 为您自动跳转登录页面");
    });
  });
});
