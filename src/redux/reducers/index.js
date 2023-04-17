import { combineReducers } from "redux";
import loginReducer from "./loginReducers";
import regisReducer from "./regisReducers";


const rootReducer = combineReducers({
    loginReducer,regisReducer
})

export default rootReducer;