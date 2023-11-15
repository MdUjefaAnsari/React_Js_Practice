import React, { Component } from 'react'

export default class MyFunArg extends Component {
    state={
        id:101
    }

    handleClick=(id,e)=>{
        console.log(id);
        console.log(e);
    }

    // handleArgs=()=>{
    //     this.handleClick(this.state.id);

    // }
  render() {
    return (
      <div>
        <button onClick={(e)=>{
        this.handleClick(this.state.id,e);//event with the parameterize with the arguments

    }}>click</button>
      </div>
    )
  }
}
