import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { setProducts } from "../../actions/product-actions/dispatcher";
import { fetchProduct } from "../../actions/product-actions/product";
import { ProductActions, productReducer } from "./product-reducer";

export interface IProduct {
  productId: string,
  productName: string,
  productPrice: string,
  productImg: string,
  category: string
}

export interface IProductContext {
  products: IProduct[],
  currentProduct: IProduct,
}

const initialState = {
  products: [],
  currentProduct: {} as IProduct
};

const ProductContext = createContext<{
  state: IProductContext;
  dispatch: React.Dispatch<ProductActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const ProductProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    fetchProduct.then((res) => setProducts(dispatch, res.data));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
const useProductContext = () => useContext(ProductContext);

export default ProductProvider;

export { useProductContext, ProductContext };
