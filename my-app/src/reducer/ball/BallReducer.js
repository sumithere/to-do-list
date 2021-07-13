

let initialState={
    balls:15
}

function BallReducer(state=initialState,action){
    console.log("in state",action);
    switch(action.type){
        case "buy_balls":
            let newState={
                balls: state.balls+1
            }
            return newState;
            case "sell_balls":
                let newState2={
                    balls: state.balls-1
                }
                return newState2;
            default:
                return initialState;
    }
}
export default BallReducer;

