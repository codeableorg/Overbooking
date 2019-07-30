/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useGame, useCurrentGame } from "../selectors";
import {
  useAddCriticalRatio,
  useSuggestOverbookingNumber
} from "../action-hooks";
import { navigate } from "@reach/router";
import Header from "../components/header";
import PicturePlane from "./../components/picture-plane";
import {
  Button,
  Row,
  TitleView,
  Card,
  LabelValue,
  Center,
  WhisperText,
  ColumnEvenly,
  Input
} from "../components/ui";

function CriticalRatio() {
  const [criticalRatio, setCriticalRatio] = React.useState("");
  const [isEnabled, setIsEnabled] = React.useState(false);

  const addCriticalRatio = useAddCriticalRatio();
  const suggestOverbooking = useSuggestOverbookingNumber();

  const current = useCurrentGame();
  const game = useGame(current);
  const { overbookingCost, underageCost } = game;

  function onChangeInputCriticalRatio(event) {
    const CRValue = event.target.value;
    if (CRValue.length > 6) {
      return false;
    }
    setCriticalRatio(CRValue);
    if (CRValue.match(/0\.\d{1,4}$/)) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    addCriticalRatio(criticalRatio * 1);
    suggestOverbooking(criticalRatio * 1);
    navigate("/overbooking");
  }
  return (
    <form onSubmit={handleSubmit} css={{ width: "100%", height: "100%" }}>
      <ColumnEvenly>
        <Header show={true} />
        <PicturePlane />

        <section css={{ width: "100%" }}>
          <TitleView>
            <h1>Calculate Critical Ratio</h1>
          </TitleView>
          <Card styles={{ marginBottom: 16 }}>
            <Row>
              <LabelValue
                label="Cost of Overbooking"
                value={overbookingCost}
                border="Right"
              />
              <LabelValue
                label="Underage Cost"
                value={underageCost}
                border="Right"
              />
            </Row>
          </Card>

          <Card styles={{ marginBottom: 24 }}>
            <div
              css={{ display: "flex", flexDirection: "column", padding: 16 }}
            >
              <label
                htmlFor="critical-ratio"
                css={{
                  fontSize: 11,
                  color: "#7e879a",
                  textTransform: "uppercase",
                  textAlign: "center",
                  marginBottom: 8
                }}
              >
                Calculate the Critical Ratio*
              </label>
              <Input
                aria-label="enter critical ratio"
                id="critical-ratio"
                name="critical-ratio"
                required="required"
                autoComplete="off"
                type="number"
                placeholder="0.0"
                onChange={onChangeInputCriticalRatio}
                value={criticalRatio}
                step="any"
                min="0"
                max="1"
              />
            </div>
          </Card>
        </section>

        <Center>
          <Button
            type="submit"
            disabled={!isEnabled}
            css={{ opacity: isEnabled ? 1 : 0.7 }}
          >
            Set Critical Ratio
          </Button>
        </Center>

        <WhisperText
          styles={{ position: "absolute", bottom: 8, width: "100%" }}
        >
          *Should be greater than 0 and less than 1
        </WhisperText>
      </ColumnEvenly>
    </form>
  );
}

export default CriticalRatio;
