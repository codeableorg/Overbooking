/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Button, LabelValue, Card, Row, TitleView } from "./../components/ui";
import PictureBoss from "./../components/picture-boss";
import PicturePlane from "./../components/picture-plane";

function UiComponents() {
  return (
    <div>
      <PictureBoss />
      <PicturePlane />
      <TitleView>
        <h1>Title</h1>
      </TitleView>

      <div css={{ marginBottom: 16 }}>
        <Card styles={{ marginBottom: 16 }}>
          <LabelValue label="Destination" value="Domestic" border="Bottom" />
          <LabelValue label="label2" value="Value2" border="Bottom" />
        </Card>

        <Card>
          <Row>
            <LabelValue label="Destination" value="Domestic" border="Right" />
            <LabelValue label="label2" value="Value2" border="Right" />
          </Row>
        </Card>
      </div>
      <Button>Button</Button>
    </div>
  );
}

export default UiComponents;
