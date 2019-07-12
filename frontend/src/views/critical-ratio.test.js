import React from "react";
import { render } from "@testing-library/react";
import CriticalRatio from "./critical-ratio";
import { Provider } from "react-redux";
import store from "../store";

test("CriticalRatio component", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <CriticalRatio />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
