function reset() {
  return { type: "RESET" };
}

function addCriticalRatio(criticalRatio) {
  return {
    type: "ADD_CRITICAL_RATIO",
    payload: criticalRatio
  };
}

function addNetRevenue(netRevenue) {
  return {
    type: "ADD_NET_REVENUE",
    payload: netRevenue
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
function setCurrentGame(currentGame) {
  return {
    type: "SET_CURRENT_GAME",
    payload: currentGame
  };
}
function setTotalRevenue(totalRevenue) {
  return {
    type: "SET_TOTAL_REVENUE",
    payload: totalRevenue
  };
}

function submitScore(user) {
  return async dispatch => {
    await fetch("http://localhost:4000/api/users", {
      method: "POST",
      body: user ? JSON.stringify(user) : "{}",
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
}

export {
  reset,
  addCriticalRatio,
  suggestOverbookingNumber,
  addOverbookingNumber,
  setTotalRevenue,
  setCurrentGame,
  submitScore,
  addNetRevenue
};
