import {createStore} from "redux";
import BallReducer from "./reducer/ball/BallReducer"

const store=createStore(BallReducer);
export default store;