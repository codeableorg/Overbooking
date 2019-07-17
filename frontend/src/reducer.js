const initialState = {
  currentGame: 1,
  games: {
    1: {
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
      cancellations: 8,
      totalRevenue: 0
    },
    2: {
      destination: "domestic",
      totalSeats: 75,
      pricePerSeat: 200,
      demandFactor: 1.0,
      underageCost: 200,
      overbookingCost: 200,
      criticalRatio: 0.5,
      suggestedOverbooking: 3,
      myCriticalRatio: 0,
      overbookingNumber: 0,
      cancellations: 6,
      totalRevenue: 0
    },
    3: {
      destination: "domestic",
      totalSeats: 75,
      pricePerSeat: 200,
      demandFactor: 1.2,
      underageCost: 250,
      overbookingCost: 300,
      criticalRatio: 0.4545,
      suggestedOverbooking: 3,
      myCriticalRatio: 0,
      overbookingNumber: 0,
      cancellations: 2,
      totalRevenue: 0
    },
    4: {
      destination: "Domestic",
      totalSeats: 150,
      pricePerSeat: 200,
      demandFactor: 1.3,
      underageCost: 275,
      overbookingCost: 358,
      criticalRatio: 0.4348,
      suggestedOverbooking: 3,
      myCriticalRatio: 0,
      overbookingNumber: 0,
      cancellations: 0,
      totalRevenue: 0
    },
    5: {
      destination: "International",
      totalSeats: 150,
      pricePerSeat: 200,
      demandFactor: 1.5,
      underageCost: 600,
      overbookingCost: 900,
      criticalRatio: 0.4,
      suggestedOverbooking: 3,
      myCriticalRatio: 0,
      overbookingNumber: 0,
      cancellations: 6,
      totalRevenue: 0
    },
    6: {
      destination: "International",
      totalSeats: 150,
      pricePerSeat: 200,
      demandFactor: 1.1,
      underageCost: 450,
      overbookingCost: 495,
      criticalRatio: 0.4762,
      suggestedOverbooking: 3,
      myCriticalRatio: 0,
      overbookingNumber: 0,
      cancellations: 8,
      totalRevenue: 0
    },
    7: {
      destination: "International",
      totalSeats: 75,
      pricePerSeat: 200,
      demandFactor: 1.4,
      underageCost: 550,
      overbookingCost: 770,
      criticalRatio: 0.4167,
      suggestedOverbooking: 3,
      myCriticalRatio: 0,
      overbookingNumber: 0,
      cancellations: 8,
      totalRevenue: 0
    }
  }
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
        games: {
          ...state.games,
          [state.currentGame]: {
            ...state.games[state.currentGame],
            myCriticalRatio: action.payload
          }
        }
      };
    }
    case "ADD_OVERBOOKING_NUMBER": {
      return {
        ...state,
        games: {
          ...state.games,
          [state.currentGame]: {
            ...state.games[state.currentGame],
            overbookingNumber: action.payload
          }
        }
      };
    }
    case "SET_TOTAL_REVENUE": {
      return {
        ...state,
        games: {
          ...state.games,
          [state.currentGame]: {
            ...state.games[state.currentGame],
            totalRevenue: action.payload
          }
        }
      };
    }
    case "SET_CURRENT_GAME": {
      return {
        ...state,
        currentGame: action.payload
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
        games: {
          ...state.games,
          [state.currentGame]: {
            ...state.games[state.currentGame],
            suggestedOverbooking: suggested
          }
        }
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
