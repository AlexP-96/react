import {legacy_createStore as createStore} from "redux";
import {combineReducers, applyMiddleware} from "redux";
import dataToDo from "../reducers/dataToDo";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    dataTodo: dataToDo
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

