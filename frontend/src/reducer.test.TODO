import reducer from "./reducer";

const state = {
  destination: "domestic",
  totalSeats: 75,
  demandFactor: 2,
  underageCost: 300,
  overbookingCost: 600,
  criticalRatio: 0.3333,
  suggestedOverbooking: 3
};

test("reducer - default", () => {
  const finalState = reducer(state, { type: "random" });
  expect(finalState).toEqual(state);
});

test("reducer - add_critical_ratio", () => {
  const action = {
    type: "ADD_CRITICAL_RATIO",
    payload: 0.4
  };
  const finalState = reducer(state, action);
  const expectedState = {
    ...state,
    myCriticalRatio: 0.4
  };
  expect(finalState).toEqual(expectedState);
});

test("reducer - add_overbooking_number", () => {
  const action = {
    type: "ADD_OVERBOOKING_NUMBER",
    payload: 5
  };
  const finalState = reducer(state, action);
  const expectedState = {
    ...state,
    overbookingNumber: 5
  };
  expect(finalState).toEqual(expectedState);
});
