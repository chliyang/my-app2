import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import useLoginPage from "./use-login-page";
// import * as http from "../../../utils/http/request";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

// const mockHttpRequest = http.default as jest.Mock;

// jest.mock(
//   "../../../utils/http/request",
//   () => () =>
//     jest
//       .fn()
//       .mockImplementationOnce(() =>
//         Promise.resolve({
//           data: { username: "user name", password: "password" }
//         })
//       )
// );

jest.mock(
  "../../../utils/http/request",
  () => () =>
    Promise.resolve({
      data: { username: "user name", password: "password" }
    })
);
describe("useLoginPage", () => {
  it("should login success", async () => {
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
});
