import { combineReducers } from "redux";
import ItemReducer from "./ItemReducer";

const rootreducer = combineReducers({
    item : ItemReducer
})

export default rootreducer