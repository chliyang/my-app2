import { IProduct, IProductContext } from "./product-provider";
import {
  ProductActions,
  ProductActionType,
  productReducer
} from "./product-reducer";

describe("#ProductReducer", () => {
  const initialState: IProductContext = {
    products: [],
    currentProduct: {} as IProduct,
    currentProductTypes: [],
    searchKey: "",
    filteredProducts: []
  };
  const mockProduct: IProduct = {
    productId: "1",
    productName: "apple",
    isFavorite: true,
    productPrice: "200",
    productImg: "light.jpg",
    category: "food",
    createdAt: "2022-2-22",
    createdBy: "wang",
    description: "This is an apple"
  };
  test("should return new state when set_products", () => {
    const mockAction: ProductActions = {
      type: ProductActionType.SET_PRODUCTS,
      payload: [mockProduct]
    };
    const newSate = productReducer(initialState, mockAction);
    expect(newSate).toEqual({
      products: [mockProduct],
      currentProduct: { ...mockProduct } as IProduct,
      currentProductTypes: [],
      searchKey: "",
      filteredProducts: []
    });
  });

  test("should return current state when include SEARCH_KEY", () => {
    const mockAction: ProductActions = {
      type: ProductActionType.SET_SEARCH_KEY,
      payload: "a"
    };
    const newSate = productReducer(
      { ...initialState, products: [mockProduct], currentProduct: mockProduct },
      mockAction
    );
    expect(newSate).toEqual({
      products: [mockProduct],
      currentProduct: { ...mockProduct } as IProduct,
      currentProductTypes: [],
      searchKey: "a",
      filteredProducts: [mockProduct]
    });
  });

  test("should return current state when not include SEARCH_KEY", () => {
    const mockAction: ProductActions = {
      type: ProductActionType.SET_SEARCH_KEY,
      payload: "s"
    };
    const newSate = productReducer(
      { ...initialState, products: [mockProduct], currentProduct: mockProduct },
      mockAction
    );
    expect(newSate).toEqual({
      products: [mockProduct],
      currentProduct: { ...mockProduct } as IProduct,
      currentProductTypes: [],
      searchKey: "s",
      filteredProducts: []
    });
  });

  test("should return new state when SET_CURRENT_PRODUCT", () => {
    const mockAction: ProductActions = {
      type: ProductActionType.SET_CURRENT_PRODUCT,
      payload: mockProduct
    };
    const newSate = productReducer(initialState, mockAction);
    expect(newSate).toEqual({
      products: [],
      currentProduct: { ...mockProduct } as IProduct,
      currentProductTypes: [],
      searchKey: "",
      filteredProducts: []
    });
  });

  test("should return new state when include CURRENT_PRODUCT_TYPES", () => {
    const mockAction: ProductActions = {
      type: ProductActionType.SET_CURRENT_PRODUCT_TYPES,
      payload: ["food"]
    };
    const newSate = productReducer(
      { ...initialState, products: [mockProduct], currentProduct: mockProduct },
      mockAction
    );
    expect(newSate).toEqual({
      products: [mockProduct],
      currentProduct: { ...mockProduct } as IProduct,
      currentProductTypes: ["food"],
      searchKey: "",
      filteredProducts: [mockProduct]
    });
  });

  test("should return new state when not include CURRENT_PRODUCT_TYPES", () => {
    const mockAction: ProductActions = {
      type: ProductActionType.SET_CURRENT_PRODUCT_TYPES,
      payload: ["clothes"]
    };
    const newSate = productReducer(
      { ...initialState, products: [mockProduct], currentProduct: mockProduct },
      mockAction
    );
    expect(newSate).toEqual({
      products: [mockProduct],
      currentProduct: { ...mockProduct } as IProduct,
      currentProductTypes: ["clothes"],
      searchKey: "",
      filteredProducts: []
    });
  });
});
