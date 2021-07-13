import React from "react";

import {connect} from "react-redux";
// import store from "../store";

function Ball(props){
    console.log(props);


    return (
        <div> 
            <h1>Number of balls{props.balls}</h1>
            <button onClick={()=>{
                props.buyBalls();
            }}>Buy Balls</button>
            <button onClick={()=>{
                props.sellBalls();
            }}>sell balls</button>
        </div>
    )
}
const mapStateToProps=(store)=>{
    return store;
}
const mapDispatchToProps=(dispatch)=>{
    return(
        {
            buyBalls:()=>{
                return dispatch({type:"buy_balls"});
            },
            sellBalls:()=>{
                return dispatch({type:"sell_balls"});
            }

        }
    )

}
const higherOrderFunction=connect(mapStateToProps,mapDispatchToProps)(Ball);
export default higherOrderFunction;
