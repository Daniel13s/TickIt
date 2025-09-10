import { render, screen } from "@testing-library/react";

import Task from "./Task";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../redux/store";

describe("Task Component", () => {
  it("task is completed", () => {
    render(
      <Provider store={store}>
          <MemoryRouter>
              <Task task={{ id: "1", name: "task name", resume: "eba", isComplete: false }}/>
          </MemoryRouter>
      </Provider>
    );
    const task = screen.getByText("task name").parentElement
    const grandParent = task?.parentElement

    expect(grandParent).toHaveAttribute("id", "taskBody")
  });
});