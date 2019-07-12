import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composer(applyMiddleware(logger)));

export default store;
