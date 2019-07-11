// src/components/channel-list.test.js
import React from "react";
import { render } from "@testing-library/react";

import FlightDetails from "./flight-details";

test("FlightDetails component", () => {
  const { asFragment } = render(<FlightDetails />);
  expect(asFragment()).toMatchSnapshot();
});
