/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "@reach/router";
import Header from "../components/header";
import PicturePlane from "./../components/picture-plane";
import {
  buttonStyles,
  Button,
  Card,
  TitleView,
  LabelValue,
  Center,
  ColumnEvenly
} from "../components/ui";

function FlightDetails() {
  return (
    <ColumnEvenly>
      <Header />
      <PicturePlane />
      <div css={{ width: "100%" }}>
        <TitleView>
          <h1>Flight 1</h1>
        </TitleView>
        <Card>
          <LabelValue label="Destination" value="Domestic" border="Bottom" />
          <LabelValue label="Capacity" value="120" border="Bottom" />
          <LabelValue
            label="Date"
            value="Monday, Jul. 15th 2019"
            border="Bottom"
          />
        </Card>
      </div>
      <Center>
        <Link to="/critical-ratio" css={buttonStyles}>
          Start
        </Link>
      </Center>
    </ColumnEvenly>
  );
}

export default FlightDetails;
