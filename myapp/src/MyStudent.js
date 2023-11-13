import React, { Component, Fragment } from "react";
import StudDetails from "./StudDetails";

export default class MyStudent extends Component{

    render(){
        return(
            <Fragment>
                <div>
                <h1 style={{color:"blue"}}>This is student component</h1>
                </div>
            <div>

                <StudDetails roll="101" name="Ujef" marks={80}/>
                <StudDetails roll="102" name="Humas" marks={110}/>
            </div>
            </Fragment>
        );
    }
}

// export default MyStudent;