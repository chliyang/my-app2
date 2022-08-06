import { IProduct, IProductContext } from "./product-provider";

export enum ProductActionType {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_SEARCH_KEY = "SET_SEARCH_KEY",
  SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT",
  SET_CURRENT_PRODUCT_TYPES = "SET_CURRENT_PRODUCT_TYPES"
}

interface ISetProductsAction {
  type: ProductActionType.SET_PRODUCTS;
  payload: IProduct[];
}

interface ISetSearchKeyProductsAction {
  type: ProductActionType.SET_SEARCH_KEY;
  payload: string;
}

interface ISetCurrentAction {
  type: ProductActionType.SET_CURRENT_PRODUCT;
  payload: IProduct;
}

interface ISetCurrentProductTypesAction {
  type: ProductActionType.SET_CURRENT_PRODUCT_TYPES;
  payload: string[];
}

export type ProductActions =
  | ISetProductsAction
  | ISetCurrentAction
  | ISetSearchKeyProductsAction
  | ISetCurrentProductTypesAction;

export const productReducer = (
  state: IProductContext,
  action: ProductActions
): IProductContext => {
  switch (action.type) {
    case ProductActionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        currentProduct: getCurrentProduct(state, action.payload),
        filteredProducts: getFilteredProducts(
          state,
          state.currentProductTypes,
          state.searchKey
        )
      };
    case ProductActionType.SET_SEARCH_KEY:
      return {
        ...state,
        searchKey: action.payload,
        filteredProducts: getFilteredProducts(
          state,
          state.currentProductTypes,
          action.payload
        )
      };
    case ProductActionType.SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload
      };
    case ProductActionType.SET_CURRENT_PRODUCT_TYPES:
      return {
        ...state,
        currentProductTypes: action.payload,
        filteredProducts: getFilteredProducts(
          state,
          action.payload,
          state.searchKey
        )
      };
    default:
      return { ...state };
  }
};

const getCurrentProduct = (
  oldState: IProductContext,
  products: IProduct[]
): IProduct => {
  const { currentProduct } = oldState;
  console.log("reducer set product", currentProduct);
  if (Object.keys(currentProduct).length === 0) {
    return products[0];
  }
  return oldState.currentProduct;
};

const getFilteredProducts = (
  oldState: IProductContext,
  filterTypes: string[],
  searchKey: string
): IProduct[] => {
  if (filterTypes.length === 0 && searchKey === "") {
    return oldState.products;
  } else if (filterTypes.length === 0) {
    return oldState.products.filter((product) =>
      product.productName.includes(searchKey)
    );
  }
  return oldState.products
    .filter((product) => filterTypes.includes(product.category))
    .filter((product) => product.productName.includes(searchKey));
};
