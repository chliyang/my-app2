import renderer from "react-test-renderer";
import RegisterPage from "../register-page";

describe("RegisterPage", () => {
  it("should render register page", () => {
    const registerPageDom = renderer.create(<RegisterPage />).toJSON();
    expect(registerPageDom).toMatchSnapshot();
  });
});
