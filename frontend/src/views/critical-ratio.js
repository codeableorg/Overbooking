/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import plane from "../images/plane.png";
import { useRound } from "../selectors";
import {
  useAddCriticalRatio,
  useSuggestOverbookingNumber
} from "../action-hooks";
import { Button } from "../components/ui";
import { navigate } from "@reach/router";

function CriticalRatio() {
  const [criticalRatio, setCriticalRatio] = React.useState("");
  const [isEnabled, setIsEnabled] = React.useState(false);

  const addCriticalRatio = useAddCriticalRatio();
  const suggestOverbooking = useSuggestOverbookingNumber();

  const state = useRound();

  const styleInputCss = {
    margin: "10px auto",
    background: "none",
    border: "1px solid black",
    borderRadius: ".25rem",
    boxSizing: "border-box",
    display: "block",
    fontSize: "1rem",
    padding: ".5rem",
    color: "#34495e",
    width: "100%",
    "&:focus": {
      outline: "none",
      borderColor: "rgba(242, 107, 117, 0.5)"
    }
  };

  const containerCss = {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    maxWidth: "400px",
    margin: "auto",
    marginTop: 50
  };
  const fieldSetCss = {
    border: "none",
    margin: "20px",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const labelCss = { display: "flex", justifyContent: "center", marginTop: 10 };
  const dataBoxCss = {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    background: "#EFF3F1"
  };
  const imageCss = {
    display: "flex",
    justifyContent: "center",
    margin: "auto"
  };

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
    <form css={containerCss} onSubmit={handleSubmit}>
      <img css={imageCss} src={plane} alt="plane" />
      <p css={labelCss}>Flight PDR456</p>
      <div css={dataBoxCss}>
        <p css={fieldSetCss}>
          Cost of Overbooking<b>{state.overbookingCost}</b>
        </p>
        <p css={fieldSetCss}>
          Underage Cost<b>{state.underageCost}</b>
        </p>
      </div>
      <label css={labelCss} htmlFor="critical-ratio">
        Calculate the Critical Ratio
      </label>
      <input
        css={styleInputCss}
        aria-label="enter critical ratio"
        id="critical-ratio"
        name="critical-ratio"
        required="required"
        autoComplete="off"
        type="number"
        placeholder="Enter The Critical Ratio"
        onChange={onChangeInputCriticalRatio}
        value={criticalRatio}
        step="any"
        min="0"
        max="1"
      />
      <Button type="submit" disabled={!isEnabled}>
        Set Critical Ratio
      </Button>
    </form>
  );
}

export default CriticalRatio;
