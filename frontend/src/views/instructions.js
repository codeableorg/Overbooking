/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import airplane from "../images/airplane.png";
import { Button } from "../components/ui";
import { Link } from "@reach/router";

function Instructions() {
  return (
    <div>
      <img
        src={airplane}
        css={{ margin: "auto", display: "block", marginBottom: 20 }}
        alt="airplane"
      />
      <div css={{ textAlign: "center" }}>
        <h1>Welcome</h1>
        <p css={{ marginBottom: 24 }}>
          Today you have to program the next 7 flights. Please make sure to do
          it well. Your decisions could make a lot of money for the company, but
          it could also make the company lose lots of money. Choose carefully.
        </p>
        <Link to="/flight-details">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}

export default Instructions;
