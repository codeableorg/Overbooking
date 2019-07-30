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

function addLastGameComplete(lastgame) {
  return {
    type: "ADD_LAST_GAME",
    payload: lastgame
  };
}

function addMoneyLeft(money) {
  return {
    type: "ADD_MONEY_LEFT",
    payload: money
  }
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
function addFeedback(feedback) {
  return {
    type: "ADD_FEEDBACK",
    payload: feedback
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
    const postUser = await fetch("http://localhost:4000/api/users", {
      method: "POST",
      body: user ? JSON.stringify(user) : "{}",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
    return postUser;
  };
}

export {
  reset,
  addCriticalRatio,
  suggestOverbookingNumber,
  addOverbookingNumber,
  addMoneyLeft,
  setTotalRevenue,
  setCurrentGame,
  submitScore,
  addNetRevenue,
  addFeedback,
  addLastGameComplete
};
