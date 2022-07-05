import { fireEvent, render } from "@testing-library/react";
import { act } from "react-test-renderer";
import HeaderList from "../header-list";

const mockPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockPush
  })
}));

describe("#HeaderList", () => {
  it("should render logout and trigger logout when click it", () => {
    const { getByText } = render(<HeaderList />);

    expect(getByText("Logout")).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText("Logout"));
    });

    expect(mockPush).toHaveBeenCalledWith("/login");
  });
});
