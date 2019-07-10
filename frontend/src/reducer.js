const initialState = {
  destination: "domestic",
  totalSeats: 75,
  demandFactor: 2,
  underageCost: 300,
  overbookingCost: 600,
  criticalRatio: 0.3333,
  suggestedOverbooking: 3
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_CRITICAL_RATIO": {
      return {
        ...state,
        myCriticalRatio: action.payload
      };
    }
    case "ADD_OVERBOOKING_NUMBER": {
      return {
        ...state,
        overbookingNumber: action.payload
      };
    }
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
