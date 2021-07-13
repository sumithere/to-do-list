import React from 'react';
import {connect} from "react-redux";


function Bat(props){
    return(
        <h1>No of Bats{props.Bat}</h1>
    )
}


















const higherOrderFunction=connect(mapStateToProps,mapDispatchToProps);
export default higherOrderFunction;