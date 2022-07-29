import { render } from "@testing-library/react";
import ProductListItem, { IProductListItemProps } from "../product-list-item";

describe("# ProductListItem", () => {
  const mockProps: IProductListItemProps = {
    productImg: "light.jpg",
    productName: "product name",
    productPrice: "100"
  };

  it("should render content correctly", () => {
    const { getByText } = render(<ProductListItem {...mockProps} />);

    expect(getByText(mockProps.productName)).toBeInTheDocument();
    expect(getByText("home.tile_description")).toBeInTheDocument();
  });
});
