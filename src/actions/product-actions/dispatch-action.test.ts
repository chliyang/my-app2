import { ProductActionType } from "../../store/product-store/product-reducer";
import { IProduct } from "./../../store/product-store/product-provider";
import {
  setCurrentProduct,
  setCurrentProductTypes,
  setProducts,
  setSearchKey
} from "./dispatch-action";

describe("#DispatchActions", () => {
  test("should call dispatch SET_PRODUCTS with products payload", () => {
    const mockDispatch = jest.fn();
    const mockData = [] as IProduct[];

    setProducts(mockDispatch, mockData);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: ProductActionType.SET_PRODUCTS,
      payload: mockData
    });
  });

  test("should call dispatch SET_SEARCH_KEY with searchKey payload", () => {
    const mockDispatch = jest.fn();
    const mockData = "";

    setSearchKey(mockDispatch, mockData);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: ProductActionType.SET_SEARCH_KEY,
      payload: mockData
    });
  });

  test("should call dispatch SET_CURRENT_PRODUCT with currentProduct payload", () => {
    const mockDispatch = jest.fn();
    const mockData = {} as IProduct;

    setCurrentProduct(mockDispatch, mockData);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: ProductActionType.SET_CURRENT_PRODUCT,
      payload: mockData
    });
  });

  test("should call dispatch SET_CURRENT_PRODUCT_TYPES with currentProductTypes payload", () => {
    const mockDispatch = jest.fn();
    const mockData = [""];

    setCurrentProductTypes(mockDispatch, mockData);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: ProductActionType.SET_CURRENT_PRODUCT_TYPES,
      payload: mockData
    });
  });
});
