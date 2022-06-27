import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import reducers from "./store/reducer/combineReducers";
export const store=createStore(reducers,applyMiddleware(thunk));