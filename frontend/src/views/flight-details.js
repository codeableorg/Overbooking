/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import airplane from "../images/airplane.png";
import { Button } from "../components/ui";
import { Link } from "@reach/router";

function FlightDetails() {
  return (
    <div>
      <img src={airplane} css={{ margin: "auto", display: "block" }} />
      <ul css={{ padding: "1em", border: "1px solid black", margin: "1em 0" }}>
        <li>Fliht number: 311</li>
        <li>Capacity: 100</li>
        <li>Date: Monday, July 15th 2019</li>
        <li>Origin: LIMA</li>
        <li>Destination: SAO PAULO</li>
      </ul>
      <Link to="/critical-ratio">
        <Button>Start</Button>
      </Link>
    </div>
  );
}

export default FlightDetails;
