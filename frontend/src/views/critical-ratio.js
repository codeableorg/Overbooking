/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useRound } from "../selectors";
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

  const game = useRound();
  const { overbookingCost, underageCost } = game.games[game.currentGame];

  function onChangeInputCriticalRatio(event) {
    setCriticalRatio(event.target.value);
    setIsEnabled(criticalRatio);
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

        <div css={{ width: "100%" }}>
          <TitleView>
            <h1>Critial Ratio</h1>
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
                autoFocus
              />
            </div>
          </Card>
        </div>

        <Center>
          <Button type="submit" disabled={!isEnabled}>
            Set Critical Ratio
          </Button>
        </Center>

        <WhisperText
          styles={{ position: "absolute", bottom: 0, width: "100%" }}
        >
          *Should be greater than 0 and less than 1
        </WhisperText>
      </ColumnEvenly>
    </form>
  );
}

export default CriticalRatio;
