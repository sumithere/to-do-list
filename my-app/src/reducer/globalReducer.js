import { combineReducers } from "redux";
import BatReducer from "./bat/BatReducer";
import BallReducer from "./ball/BallReducer";

const combinedReducers=combineReducers({
    Bat:BatReducer ,
    Ball:BallReducer
}
  
)
export default combinedReducers;