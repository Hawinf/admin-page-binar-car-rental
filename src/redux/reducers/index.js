import { combineReducers } from "redux";
import loginReducer from "./loginReducers";
import regisReducer from "./regisReducers";
import carReducers from "./carReducers";


const rootReducer = combineReducers({
    loginReducer,regisReducer, carReducers
})

export default rootReducer;