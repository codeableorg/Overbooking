import React from "react";
// TODO: Review what's doing cleanup
import { render, cleanup } from "@testing-library/react";
// TODO: Review if all these imports are necesary
import {
  createHistory,
  createMemorySource,
  LocationProvider
} from "@reach/router";
import "@testing-library/jest-dom/extend-expect";

import store from "./store";
import { Provider } from "react-redux";
import App from "./App";

afterEach(cleanup);

function renderWithRouter(
  ui,
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history
  };
}

test("home page", () => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "portal");
  document.body.appendChild(modalRoot);

  const { asFragment, getByText } = renderWithRouter(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
  expect(getByText(/NEW GAME/)).not.toBe(null);
});

test("instructions page", () => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "portal");
  document.body.appendChild(modalRoot);

  const { asFragment, getByText } = renderWithRouter(
    <Provider store={store}>
      <App />
    </Provider>,
    { route: "/instructions" }
  );

  expect(asFragment()).toMatchSnapshot();
  expect(getByText(/Next/)).not.toBe(null);
});
