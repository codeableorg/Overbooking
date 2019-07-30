/* eslint-disable no-fallthrough */

import newYork from "./images/domestic/new-york.svg";
import southDakota from "./images/domestic/south-dakota.svg";
import lasVegas from "./images/domestic/las-vegas-nevada.svg";
import losAngeles from "./images/domestic/los-angeles-california.svg";
import washington from "./images/domestic/washington-dc.svg";
import giza from "./images/international/giza-egypt.svg";
import london from "./images/international/london-england.svg";
import rio from "./images/international/rio-de-Janeiro-brazil.svg";

const initialState = {
  lastGameComplete: {},
  currentGame: 1,
  games: {
    1: {
      flightNumber: "QF3421",
      journey: {
        originName: "Las Vegas",
        destinationName: "Los Angeles",
        originImage: lasVegas,
        destinationImage: losAngeles
      },
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
      totalRevenue: 0,
      netRevenue: 0,
      feedback: "",
      dateFlight: "Monday, Aug 1st 2019",
      moneyLeft: 0
    },
    2: {
      flightNumber: "PT0509",
      journey: {
        originName: "New York",
        destinationName: "South Dakota",
        originImage: newYork,
        destinationImage: southDakota
      },
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
      totalRevenue: 0,
      netRevenue: 0,
      feedback: "",
      dateFlight: "Tuesday, Aug 2nd 2019",
      moneyLeft: 0
    },
    3: {
      flightNumber: "VAL0202",
      journey: {
        originName: "Washington DC",
        destinationName: "Los Angeles",
        originImage: washington,
        destinationImage: losAngeles
      },
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
      totalRevenue: 0,
      netRevenue: 0,
      feedback: "",
      dateFlight: "Wednesday, Aug 3rd 2019",
      moneyLeft: 0
    },
    4: {
      flightNumber: "CHI1608",
      journey: {
        originName: "Las Vegas",
        destinationName: "South Dakota",
        originImage: lasVegas,
        destinationImage: southDakota
      },
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
      totalRevenue: 0,
      netRevenue: 0,
      feedback: "",
      dateFlight: "Thursday, Aug 4th 2019",
      moneyLeft: 0
    },
    5: {
      flightNumber: "LET8655",
      journey: {
        originName: "New York",
        destinationName: "London",
        originImage: newYork,
        destinationImage: london
      },
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
      totalRevenue: 0,
      netRevenue: 0,
      feedback: "",
      dateFlight: "Friday, Aug 5th 2019",
      moneyLeft: 0
    },
    6: {
      flightNumber: "CON9264",
      journey: {
        originName: "Washington DC",
        destinationName: "Giza",
        originImage: washington,
        destinationImage: giza
      },
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
      totalRevenue: 0,
      netRevenue: 0,
      feedback: "",
      dateFlight: "Saturday, Aug 6th 2019",
      moneyLeft: 0
    },
    7: {
      flightNumber: "QQ1234",
      journey: {
        originName: "Las Vegas",
        destinationName: "Rio de Janeiro",
        originImage: lasVegas,
        destinationImage: rio
      },
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
      totalRevenue: 0,
      netRevenue: 0,
      feedback: "",
      dateFlight: "Sunday, Aug 7th 2019",
      moneyLeft: 0
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
    case "ADD_FEEDBACK": {
      return {
        ...state,
        games: {
          ...state.games,
          [state.currentGame]: {
            ...state.games[state.currentGame],
            feedback: action.payload
          }
        }
      };
    }
    case "ADD_LAST_GAME": {
      return {
        ...state,
        lastGameComplete: action.payload
      };
    }
    case "ADD_NET_REVENUE": {
      return {
        ...state,
        games: {
          ...state.games,
          [state.currentGame]: {
            ...state.games[state.currentGame],
            netRevenue: action.payload
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
    case "ADD_MONEY_LEFT": {
      return {
        ...state,
        games: {
          ...state.games,
          [state.currentGame]: {
            ...state.games[state.currentGame],
            moneyLeft: action.payload
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
      for (let i = 0; i < ratios.length; i++) {
        if (ratios[i] >= action.payload) {
          const suggested = ratios.findIndex(ratio => ratio === ratios[i]);
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
