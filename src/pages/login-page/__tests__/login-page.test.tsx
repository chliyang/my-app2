import renderer from 'react-test-renderer';
import LoginPage from "../login-page";

describe("# LoginPage", () => {
  it("should render login form", () => {
    const loginPageDom = renderer.create(<LoginPage />).toJSON();
    expect(loginPageDom).toMatchSnapshot();
  });
});
