import React, { Component } from "react";


export default class MyEvent extends Component{
    constructor(){
        super();
        this.handleClick=this.handleClick.bind(this);
    }

    state={//this is state/data
        roll:102,
        std:"10th"
    }
    handleClick(){
       console.log("I am clicked Now...");
       console.log(this)

    }

    // handleClick=()=>{
    //        console.log("I am clicked Now...");
    //        console.log(this)
    
    //     }

    render(){
        return(
            <div>
                
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}