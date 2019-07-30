/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "@reach/router";
import Header from "../components/header";
import PictureBoss from "./../components/picture-boss";

import {
  buttonStyles,
  TitleView,
  Center,
  ColumnEvenly
} from "./../components/ui";

function Instructions() {
  const paragraphCss = {
    fontSize: 14,
    lineHeight: 1.5,
    textAlign: "center",
    maxWidth: 295,
    margin: "1em auto",
    "@media (min-width: 375px)": {
      fontSize: 15
    }
  };
  return (
    <ColumnEvenly>
      <Header show={true} direction={true} />
      <PictureBoss />
      <div>
        <TitleView>
          <h1>Welcome</h1>
        </TitleView>
        <p css={paragraphCss}>
          The airline's revenue management team is short-staffed and you've been
          asked to support them this week.
        </p>
        <p css={paragraphCss}>
          Since cancellations are common, you can maximize revenue by
          overbooking. However, if the cancellations don't materialize you may
          end up paying to compensate bumped travelers.
        </p>
        <p css={paragraphCss}>
          You'll manage one flight each day while competing with your peers to
          see who generated the most revenue. Good luck!
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
