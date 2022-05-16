import { render, screen } from "@testing-library/react";
import React from "react";
import LoginPage from "../login-page";

describe("# LoginPage", () => {
  it("should render login form", () => {
    render(<LoginPage />);

    expect(screen.getByText("登 录")).toBeInTheDocument();
  });
});
