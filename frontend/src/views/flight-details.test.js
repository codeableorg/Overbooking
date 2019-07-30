import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";

import FlightDetails from "./flight-details";

test("FlightDetails component", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <FlightDetails />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
