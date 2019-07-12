const initialState = {
  destination: "domestic",
  totalSeats: 75,
  pricePerSeat: 200,
  demandFactor: 2,
  underageCost: 300,
  overbookingCost: 600,
  criticalRatio: 0.3333,
  suggestedOverbooking: 3,
  myCriticalRatio: 0,
  overbookingNumber: 0,
  cancellations: 0,
  totalRevenue: 0
};

const ratios = [
  0.0002,
  0.0019,
  0.0093,
  0.0301,
  0.0744,
  0.1496,
  0.2562,
  0.3856,
  0.5231,
  0.653,
  0.7634,
  0.8487,
  0.9091,
  0.9486,
  0.9726,
  0.9862,
  0.9934,
  0.997,
  0.9987,
  0.9995
];

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
    case "SET_TOTAL_REVENUE": {
      return {
        ...state,
        totalRevenue: action.payload
      };
    }
    case "SUGGEST_OVERBOOKING": {
      let closest = ratios.reduce(function(prev, curr) {
        return Math.abs(curr - action.payload) < Math.abs(prev - action.payload)
          ? curr
          : prev;
      });

      const suggested = ratios.findIndex(ratio => ratio === closest);

      return {
        ...state,
        suggestedOverbooking: suggested
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
