import { IProduct, IProductContext } from "./product-provider";

export enum ProductActionType {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT"
}

interface ISetProductsAction {
  type: ProductActionType.SET_PRODUCTS;
  payload: IProduct[];
}

interface ISetCurrentAction {
  type: ProductActionType.SET_CURRENT_PRODUCT;
  payload: IProduct;
}

export type ProductActions = ISetProductsAction | ISetCurrentAction;

export const productReducer = (
  state: IProductContext,
  action: ProductActions
): IProductContext => {
  switch (action.type) {
    case ProductActionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        currentProduct: getCurrentProduct(state, action.payload)
      };
    case ProductActionType.SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload
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
