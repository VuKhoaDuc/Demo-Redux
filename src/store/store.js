import { createStore, applyMiddleware, compose } from "redux";
// import "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/toPromise";
import { persistStore, autoRehydrate } from "redux-persist";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "localforage";

import reducer from "./rootReducer";
import rootEpic from "./rootEpic";

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const _initialState = {};

export default function initStore(initialState = _initialState) {
  const middlewares = [epicMiddleware];

  // const composeEnhance = dev ? composeWithDevTools : compose;
  const enhancers = [applyMiddleware(...middlewares), autoRehydrate()];

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(...enhancers)
  );

  const whitelist = ["post"];
  // const state = store.getState();
  /*eslint-disable */
  if (process.browser) {
    persistedStore = persistStore(store, {
      whitelist,
      storage
    });
  }
  return store;
}
