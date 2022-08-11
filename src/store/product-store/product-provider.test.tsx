import * as productActions from "../../actions/product-actions/product-api";
import ProductProvider, {
  IProduct,
  useProductContext
} from "./product-provider";
import { render, screen, waitFor } from "@testing-library/react";

describe("#ProductProvider", () => {
  it("should render children component with provider values", async () => {
    // fetchProduct.mockResolvedValue([{ id: 1, name: "Li" }]);
    const mockData: IProduct[] = [
      {
        productId: "1",
        productName: "apple",
        isFavorite: true,
        productPrice: "200",
        productImg: "light.jpg",
        category: "food",
        createdAt: "2022-2-22",
        createdBy: "wang",
        description: "This is an apple"
      }
    ];
    jest.spyOn(productActions, "fetchProduct").mockImplementation(() =>
      Promise.resolve({
        data: mockData
      })
    );

    const Child = () => {
      const { state } = useProductContext();
      return (
        <div>{state.products.length && state.products[0].productName}</div>
      );
    };

    render(
      <ProductProvider>
        <Child />
      </ProductProvider>
    );

    await waitFor(() => expect(screen.getByText("apple")).toBeInTheDocument());
  });
});
