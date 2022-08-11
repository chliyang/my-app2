import { fetchProduct, fetchProductTypes, updateProduct } from "./product-api";

const mockHttp = jest.fn();
jest.mock("../../utils/http/request", () => () => mockHttp());

describe("#ProductAPI", () => {
  test("should return products when fetchProduct called", async () => {
    mockHttp.mockResolvedValue({
      data: []
    });

    await expect(fetchProduct()).resolves.toEqual({
      data: []
    });
  });

  test("should return product types when fetchProductTypes called", async () => {
    mockHttp.mockResolvedValue({
      data: ["food"]
    });

    await expect(fetchProductTypes()).resolves.toEqual({
      data: ["food"]
    });
  });

  test("should update product", async () => {
    mockHttp.mockResolvedValue({
      data: {
        isStared: true
      }
    });
    const mockData = {
      isStared: true
    };
    const mockId = "1";
    await expect(updateProduct(mockId, mockData)).resolves.toEqual({
      data: {
        isStared: true
      }
    });
  });
});
