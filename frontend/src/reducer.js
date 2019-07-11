const initialState = {
  destination: "domestic",
  totalSeats: 75,
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

      // it works. nevertheless, it needs a refactor
      switch (closest) {
        case 0.0002: {
          return {
            ...state,
            suggestedOverbooking: 0
          };
        }
        case 0.0019: {
          return {
            ...state,
            suggestedOverbooking: 1
          };
        }
        case 0.0093: {
          return {
            ...state,
            suggestedOverbooking: 2
          };
        }
        case 0.0301: {
          return {
            ...state,
            suggestedOverbooking: 3
          };
        }
        case 0.0744: {
          return {
            ...state,
            suggestedOverbooking: 4
          };
        }
        case 0.1496: {
          return {
            ...state,
            suggestedOverbooking: 5
          };
        }
        case 0.2562: {
          return {
            ...state,
            suggestedOverbooking: 6
          };
        }
        case 0.3856: {
          return {
            ...state,
            suggestedOverbooking: 7
          };
        }
        case 0.5231: {
          return {
            ...state,
            suggestedOverbooking: 8
          };
        }
        case 0.653: {
          return {
            ...state,
            suggestedOverbooking: 9
          };
        }
        case 0.7634: {
          return {
            ...state,
            suggestedOverbooking: 10
          };
        }
        case 0.8487: {
          return {
            ...state,
            suggestedOverbooking: 11
          };
        }
        case 0.9091: {
          return {
            ...state,
            suggestedOverbooking: 12
          };
        }
        case 0.9486: {
          return {
            ...state,
            suggestedOverbooking: 13
          };
        }
        case 0.9726: {
          return {
            ...state,
            suggestedOverbooking: 14
          };
        }
        case 0.9862: {
          return {
            ...state,
            suggestedOverbooking: 15
          };
        }
        case 0.9934: {
          return {
            ...state,
            suggestedOverbooking: 16
          };
        }
        case 0.997: {
          return {
            ...state,
            suggestedOverbooking: 17
          };
        }
        case 0.9987: {
          return {
            ...state,
            suggestedOverbooking: 18
          };
        }
        case 0.9995: {
          return {
            ...state,
            suggestedOverbooking: 19
          };
        }
        default: {
          return 20;
        }
      }
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
