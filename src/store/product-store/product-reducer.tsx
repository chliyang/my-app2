import { IProduct, IProductContext } from "./product-provider";

export enum ProductActionType {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT",
  SET_CURRENT_PRODUCT_TYPES = "SET_CURRENT_PRODUCT_TYPES"
}

interface ISetProductsAction {
  type: ProductActionType.SET_PRODUCTS;
  payload: IProduct[];
}

interface ISetCurrentAction {
  type: ProductActionType.SET_CURRENT_PRODUCT;
  payload: IProduct;
}

interface ISetCurrentProductTypesAction {
  type: ProductActionType.SET_CURRENT_PRODUCT_TYPES;
  payload: string[];
}

export type ProductActions = ISetProductsAction | ISetCurrentAction | ISetCurrentProductTypesAction;

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
        filteredProducts: getFilteredProducts(state, state.currentProductTypes)
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
        filteredProducts: getFilteredProducts(state, action.payload)
      };
    default:
      return { ...state };
      break;
  }
};

const getCurrentProduct = (
  oldState: IProductContext,
  products: IProduct[]
): IProduct => {
  const { currentProduct } = oldState;
  if (Object.keys(currentProduct).length === 0) {
    return products[0];
  }
  return oldState.currentProduct;
};

const getFilteredProducts = (oldState: IProductContext, filterTypes: string[]): IProduct[] => {
  if (filterTypes.length === 0) return oldState.products;
  return oldState.products.filter((product) => filterTypes.includes(product.category));
}
