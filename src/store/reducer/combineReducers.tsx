import { combineReducers } from "redux";
import reducer from "./index";
 const reducers=combineReducers({reducer:reducer});
 export default reducers
 export type RootState = ReturnType<typeof reducers>