import { screen } from "@testing-library/react";
import {
  IProduct,
  ProductContext
} from "../../../../store/product-store/product-provider";
import { renderWithContext } from "../../../../utils/test-utils/test-utils";
import ProductList from "../product-list";

describe("# ProductList", () => {
  const mockProducts: IProduct[] = [
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
    },
    {
      productId: "2",
      productName: "skirt",
      isFavorite: false,
      productPrice: "200",
      productImg: "light.jpg",
      category: "clothes",
      createdAt: "2022-2-24",
      createdBy: "chang",
      description: "This is an skirt"
    },
    {
      productId: "3",
      productName: "desk",
      isFavorite: false,
      productPrice: "200",
      productImg: "light.jpg",
      category: "furniture",
      createdAt: "2022-2-25",
      createdBy: "zhang",
      description: "This is an desk"
    },
    {
      productId: "4",
      productName: "telephone",
      isFavorite: false,
      productPrice: "200",
      productImg: "light.jpg",
      category: "electric",
      createdAt: "2022-2-12",
      createdBy: "li",
      description: "This is an telephone"
    },
    {
      productId: "5",
      productName: "toothpaste",
      isFavorite: false,
      productPrice: "200",
      productImg: "light.jpg",
      category: "toiletries",
      createdAt: "2022-2-18",
      createdBy: "zeng",
      description: "This is an toothpaste"
    }
  ];

  it("should render product list correctly", () => {
    const mockValue = {
      state: { filteredProducts: mockProducts },
      dispatch: jest.fn()
    };
    renderWithContext(ProductContext, <ProductList />, mockValue);
    mockProducts.forEach((mockProduct) =>
      expect(screen.getByText(mockProduct.productName)).toBeInTheDocument()
    );
  });
});
