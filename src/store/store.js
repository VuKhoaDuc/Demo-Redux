import { createStore, applyMiddleware, compose } from "redux";

import rootEpic from "./rootEpic";
import reducer from "./rootReducer";





import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createEpicMiddleware } from "redux-observable";

import App from "./components/App";
import rootReducer from "./reducers";
import customMiddleware from "./middleware/customMiddleware";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(customMiddleware, epicMiddleware)),
);

epicMiddleware.run(rootEpic);





