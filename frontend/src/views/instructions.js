/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "@reach/router";
import Header from "../components/header";
import PictureBoss from "./../components/picture-boos";

import {
  buttonStyles,
  TitleView,
  Center,
  ColumnEvenly
} from "./../components/ui";

function Instructions() {
  return (
    <ColumnEvenly>
      <Header />
      <PictureBoss />
      <div>
        <TitleView>
          <h1>Welcome</h1>
        </TitleView>
        <p
          css={{
            fontSize: 18,
            lineHeight: 1.5,
            textAlign: "center",
            maxWidth: 295,
            margin: "auto"
          }}
        >
          Today you have to program the next 7 flights. Please make sure to do
          it well. Your decisions could make a lot of money for the company, but
          it could also make the company lose lots of money. Choose carefully.
        </p>
      </div>
      <Center>
        <Link to="/flight-details" css={buttonStyles}>
          Next
        </Link>
      </Center>
    </ColumnEvenly>
  );
}

export default Instructions;
