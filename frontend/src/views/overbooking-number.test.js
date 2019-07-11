import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";

import OverbookingNumber from "./overbooking-number";

test("CriticalRatio component", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <OverbookingNumber />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
