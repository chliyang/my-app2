import { render } from "@testing-library/react";
import { IProduct } from "../../../../store/product-store/product-provider";
import ProductListItem from "../product-list-item";

describe("# ProductListItem", () => {
  const mockCurrentProduct: IProduct = {
    productImg: "light.jpg",
    productName: "product name",
    isFavorite: false,
    productPrice: "100",
    productId: "001",
    category: "food",
    createdAt: "2022-2-25",
    createdBy: "zhang",
    description: null
  };

  it("should render content correctly", () => {
    const { getByText, getByTestId } = render(
      <ProductListItem currentProduct={mockCurrentProduct} />
    );

    expect(getByText(mockCurrentProduct.productName)).toBeInTheDocument();
    expect(getByTestId("outline-star")).toBeInTheDocument();
    expect(getByText("home.tile_description")).toBeInTheDocument();
  });
});
