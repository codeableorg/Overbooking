function reset() {
  return { type: "RESET" };
}

function addCriticalRatio(criticalRatio) {
  return {
    type: "ADD_CRITICAL_RATIO",
    payload: criticalRatio
  };
}

function addOverbookingNumber(overbookingNumber) {
  return {
    type: "ADD_OVERBOOKING_NUMBER",
    payload: overbookingNumber
  };
}

export { reset, addCriticalRatio, addOverbookingNumber };
