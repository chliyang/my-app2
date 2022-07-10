import { render } from "@testing-library/react";
import MessageCard, { IMessageCardProps } from "../message-card";

describe("# MessageCard", () => {
  const mockProps: IMessageCardProps = {
    title: "Title",
    message: "This is a massage",
    buttonText: "Button Text"
  };

  it("should render content correctly", () => {
    const { getByText } = render(<MessageCard {...mockProps} />);

    expect(getByText(mockProps.title)).toBeInTheDocument();
    expect(getByText(mockProps.message)).toBeInTheDocument();
    expect(getByText(mockProps.buttonText)).toBeInTheDocument();
  });
});
