import { render } from "@testing-library/react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import Menu from "../menu";
import { act } from "react-test-renderer";
import userEvent from "@testing-library/user-event";

describe("#HeaderList", () => {
  it("should render links, redirect and update history", () => {
    const { getAllByRole, getByText } = render(<Menu />);
    const history = createMemoryHistory();
    // https://juejin.cn/post/7004730752805896199（实现参考链接）
    const clickHandler = jest.fn((evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      history.push("/about");
    });
    getByText("home.menu_about").onclick = (evt) => clickHandler(evt);

    expect(getAllByRole("link")).toHaveLength(5);

    act(() => {
      userEvent.click(getByText("home.menu_about"));
    });

    expect(history.location.pathname).toEqual("/about");
  });
});
