import { render } from "@testing-library/react";
import { IProduct } from "../../../../store/product-store/product-provider";
import ProductListItem from "../product-list-item";

describe("# ProductListItem", () => {
  const mockCurrentProduct: IProduct = {
    productImg: "light.jpg",
    productName: "product name",
    productPrice: "100",
    productId: "001",
    category: "food"
  };

  it("should render content correctly", () => {
    const { getByText } = render(
      <ProductListItem currentProduct={mockCurrentProduct} />
    );

    expect(getByText(mockCurrentProduct.productName)).toBeInTheDocument();
    expect(getByText("home.tile_description")).toBeInTheDocument();
  });
});
