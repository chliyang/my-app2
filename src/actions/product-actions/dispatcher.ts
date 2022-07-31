import { IProduct } from "./../../store/product-store/product-provider";
import React from "react";
import {
  ProductActions,
  ProductActionType
} from "../../store/product-store/product-reducer";

export const setProducts = (
  dispatch: React.Dispatch<ProductActions>,
  products: IProduct[]
) =>
  dispatch({
    type: ProductActionType.SET_PRODUCTS,
    payload: products
  });

export const setCurrentProduct = (
  dispatch: React.Dispatch<ProductActions>,
  product: IProduct
) =>
  dispatch({
    type: ProductActionType.SET_CURRENT_PRODUCT,
    payload: product
  });

export const setCurrentProductTypes = (
  dispatch: React.Dispatch<ProductActions>,
  productTypes: string[]
) =>
  dispatch({
    type: ProductActionType.SET_CURRENT_PRODUCT_TYPES,
    payload: productTypes
  });
