import React, { Component } from "react";

export default class MyStudent1 extends Component {
    constructor(props){
        super(props)
        // this.state={
        //     roll:this.props.roll,
        //     name:this.props.name
        // }

        this.state={
            like:0// like = like+=1 // 1,2,,3
        }
    }
    // handleClick=()=>{
    //     // this.setState({roll:102,name:"Ansari"});4
    //     this.setState(function(state,props){//anynoumous function or call back function

    //         console.log(state.name,props.roll)

    //     })
    // }

    handleLike=()=>{
        if(this.state.like<10){
        this.setState({like:this.state.like+1});
        }
    }
    handleDislike=()=>{
        if(this.state.like>0){
        this.setState({like:this.state.like-1});
        }
    }

  render() {
    return (
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"></link>
        {/* <h1>ROll:{this.state.roll}</h1>
        <h1>Name:{this.state.name}</h1>
        <button onClick={this.handleClick}>Update</button> */}

        <button onClick={this.handleLike}><i class="fas fa-thumbs-up"></i> Like </button>
        <h1>{this.state.like}</h1>
        <button onClick={this.handleDislike}> <i class="fas fa-thumbs-down"></i> Dislike</button>
       
    </div>
    );
  }
}
