import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { act } from "react-test-renderer";
import * as productActions from "../../../../actions/product-actions/product-api";
import {
  IProduct,
  ProductContext
} from "../../../../store/product-store/product-provider";
import { renderWithContext } from "../../../../utils/test-utils/test-utils";
import FavoriteButton from "../favorite-button";

describe("#FavoriteButton", () => {
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
  it("should show success toast and change star state when update success", async () => {
    const mockValue = {
      dispatch: jest.fn()
    };
    jest.spyOn(productActions, "updateProduct").mockImplementation(() =>
      Promise.resolve({
        data: {}
      })
    );
    renderWithContext(
      ProductContext,
      <FavoriteButton currentProduct={mockCurrentProduct} />,
      mockValue
    );

    expect(screen.getByTestId("outline-star")).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByRole("button"));
    });

    await waitFor(() => {
      expect(
        screen.getByText("detail.toast_action_success")
      ).toBeInTheDocument();
    });

    await waitForElementToBeRemoved(
      () => screen.queryByText("detail.toast_action_success"),
      { timeout: 5000 }
    );
    expect(screen.getByTestId("filled-star")).toBeInTheDocument();
  });

  it("should show failed toast and not change star state when update failed", async () => {
    const mockValue = {
      dispatch: jest.fn()
    };
    jest
      .spyOn(productActions, "updateProduct")
      .mockImplementation(() => Promise.reject(new Error()));
    renderWithContext(
      ProductContext,
      <FavoriteButton currentProduct={mockCurrentProduct} />,
      mockValue
    );

    expect(screen.getByTestId("outline-star")).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByRole("button"));
    });

    await waitFor(() => {
      expect(
        screen.getByText("detail.toast_action_failed")
      ).toBeInTheDocument();
    });

    await waitForElementToBeRemoved(
      () => screen.queryByText("detail.toast_action_failed"),
      { timeout: 5000 }
    );
    expect(screen.getByTestId("outline-star")).toBeInTheDocument();
  });
});
