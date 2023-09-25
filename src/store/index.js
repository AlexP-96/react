import {legacy_createStore as createStore} from "redux";
import {combineReducers} from "redux";
import dataToDo from "../reducers/dataToDo";
import {composeWithDevTools} from "redux-devtools-extension";

export const rootReducer = combineReducers({
    dataTodo: dataToDo
});

export const store = createStore(rootReducer, composeWithDevTools());

