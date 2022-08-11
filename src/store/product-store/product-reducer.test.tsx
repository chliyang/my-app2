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
});
