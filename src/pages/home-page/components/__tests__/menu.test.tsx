import { render } from "@testing-library/react";
import { Router } from "react-router";
import { createMemoryHistory } from 'history';
import Menu from "../menu";
import { act } from "react-test-renderer";
import userEvent from "@testing-library/user-event";

describe("#HeaderList", () => {
  it('should render links, redirect and update history', () => {
    const history = createMemoryHistory();

    const { getAllByRole, getByText } = render(<Router history={history}><Menu /></Router>);

    expect(getAllByRole("link")).toHaveLength(5);

    act(() => {
      userEvent.click(getByText("home.menu_home"));
    });

    expect(history.location.pathname).toEqual('/home');
  });
});
