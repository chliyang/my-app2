import { render } from "@testing-library/react";
import PromotionListItem, { IPromotionListItemProps } from "../promotion-list-Item";

describe("# MessageCard", () => {
  const mockProps: IPromotionListItemProps = {
    productName: "Product Name",
    productPrice: 0,
    category: "食物"
  };

  it("should render content correctly", () => {
    const { getByText } = render(<PromotionListItem {...mockProps} />);

    expect(getByText(mockProps.productName)).toBeInTheDocument();
    expect(getByText("home.side_promotion_product_price")).toBeInTheDocument();
    expect(getByText("home.side_promotion_product_category")).toBeInTheDocument();
  });
});
