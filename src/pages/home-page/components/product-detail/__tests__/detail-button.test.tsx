import { fireEvent, screen } from "@testing-library/react";
import { act } from "react-test-renderer";
import {
  IProduct,
  ProductContext
} from "../../../../../store/product-store/product-provider";
import { renderWithContext } from "../../../../../utils/test-utils/test-utils";
import DetailButton from "../detail-button";

const mockPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockPush
  })
}));

describe("#DetailButton", () => {
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
  it("should redirect to detail page when click detail button", () => {
    const mockValue = {
      dispatch: jest.fn()
    };
    renderWithContext(
      ProductContext,
      <DetailButton currentProduct={mockCurrentProduct} />,
      mockValue
    );

    act(() => {
      fireEvent.click(screen.getByTestId("detail-button"));
    });

    expect(mockPush).toHaveBeenCalledWith({
      pathname: `/products/${mockCurrentProduct.productId}`,
      state: mockCurrentProduct
    });
  });
});
