function reset() {
  return { type: "RESET" };
}

function addCriticalRatio(criticalRatio) {
  return {
    type: "ADD_CRITICAL_RATIO",
    payload: criticalRatio
  };
}

function suggestOverbookingNumber(criticalRatio) {
  return {
    type: "SUGGEST_OVERBOOKING",
    payload: criticalRatio
  };
}

function addOverbookingNumber(overbookingNumber) {
  return {
    type: "ADD_OVERBOOKING_NUMBER",
    payload: overbookingNumber
  };
}

function setTotalRevenue(totalRevenue) {
  return {
    type: "SET_TOTAL_REVENUE",
    payload: totalRevenue
  };
}

export {
  reset,
  addCriticalRatio,
  suggestOverbookingNumber,
  addOverbookingNumber,
  setTotalRevenue
};
