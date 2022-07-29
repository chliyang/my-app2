import { routes } from "./../routes";
import { renderHook, waitFor } from "@testing-library/react";
import useRouters from "./use-routers";
import * as http from "../../utils/http/request";

describe("# useRouters", () => {
  const mockUserInfo = { rolesId: [2] };
  const mockHttp = jest.spyOn(http, "default");
  it("should get visitable routers by user roles id", async () => {
    mockHttp.mockImplementation(() =>
      Promise.resolve({
        data: mockUserInfo
      })
    );
    const { result } = renderHook(useRouters);

    await waitFor(() => {
      expect(result.current.visitableRoutes).toEqual(routes);
    });
  });
});
