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
    expect(getByText("物品价格：0（元）")).toBeInTheDocument();
    expect(getByText("物品分类：食物")).toBeInTheDocument();
  });
});
