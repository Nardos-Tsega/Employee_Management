import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
