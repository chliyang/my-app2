import React, { createContext, useReducer, useContext, useEffect } from "react";
import { setProducts } from "../../actions/product-actions/dispatch-action";
import { fetchProduct } from "../../actions/product-actions/product-api";
import { ProductActions, productReducer } from "./product-reducer";

export interface IProduct {
  productId: string;
  productName: string;
  isFavorite: boolean;
  productPrice: string;
  productImg: string;
  category: string;
  description: string | null;
  createdAt: string;
  createdBy: string;
}

export interface IProductContext {
  products: IProduct[];
  currentProduct: IProduct;
  currentProductTypes: string[];
  searchKey: string;
  filteredProducts: IProduct[];
}

const initialState = {
  products: [],
  currentProduct: {} as IProduct,
  currentProductTypes: [],
  searchKey: "",
  filteredProducts: []
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
    console.log("provider init");
    fetchProduct().then((res) => setProducts(dispatch, res.data));
  }, []);

  useEffect(() => {
    return () => {
      console.log("provider unMount");
    };
  });

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
