import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "../authReducer";
import thunk from "redux-thunk";
import { uiReducer } from "../uiReducer";
import { notesReducer } from "../notesReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
