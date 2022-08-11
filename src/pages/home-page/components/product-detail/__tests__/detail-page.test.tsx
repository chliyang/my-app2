import { fireEvent, render } from "@testing-library/react";
import { act } from "react-test-renderer";
import { IProduct } from "../../../../../store/product-store/product-provider";
import ProductDetail from "../detail-page";

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

const mockPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockPush
  }),
  useLocation: () => ({
    state: mockCurrentProduct
  })
}));

describe("#DetailPage", () => {
  it("should render detail of product correctly", () => {
    const { getByText } = render(<ProductDetail />);

    expect(getByText(/product name/i)).toBeInTheDocument();
    expect(getByText(/001/i)).toBeInTheDocument();
    expect(getByText(/food/i)).toBeInTheDocument();
    expect(getByText(/2022-2-25/i)).toBeInTheDocument();
  });

  it("should redirect to home page when click go home button", () => {
    const { getByText } = render(<ProductDetail />);

    act(() => {
      fireEvent.click(getByText("detail.button_go_back"));
    });

    expect(mockPush).toHaveBeenCalledWith("/home");
  });
});
