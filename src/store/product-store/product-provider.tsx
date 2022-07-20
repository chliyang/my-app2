import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { ProductActions, productReducer } from "./product-reducer";

export interface IProduct {
  productId: string,
  productName: string,
  productPrice: string,
  category: string
}

export interface IProductContext {
  products: IProduct[],
  currentProduct: IProduct,
}

const initialState = {
  products: [],
  currentProduct: {} as IProduct,
}

const ProductContext = createContext<{
  state: IProductContext;
  dispatch: React.Dispatch<ProductActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const ProductProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
const useUserContext = () => useContext(ProductContext);

export default ProductProvider;

export { useUserContext, ProductContext as UserContext };
