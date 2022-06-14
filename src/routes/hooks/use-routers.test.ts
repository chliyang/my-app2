import { routes } from "./../routes";
import { renderHook, waitFor } from "@testing-library/react";
import useRouters from "./use-routers";

const mockHttp = jest.fn();
jest.mock("../../utils/http/request", () => () => mockHttp());

describe("# useRouters", () => {
  const mockUserInfo = { rolesId: [2] };
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
