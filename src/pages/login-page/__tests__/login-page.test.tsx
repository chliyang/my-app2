import { render } from "@testing-library/react";
import LoginPage from "../login-page";

describe("# loginPage", () => {
  it("should render initial login page", () => {
    const { getByTestId, getByText } = render(<LoginPage />);

    expect(getByTestId("login-form")).toBeInTheDocument();
    expect(getByText(/登 录/i)).toBeInTheDocument();
    expect(getByText(/立即注册/i)).toBeInTheDocument();
  });
});
