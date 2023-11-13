//how to make state in react
import React, { Component } from 'react'

export default class MyState extends Component {
   //constructor
   constructor(props){
    super(props);
    this.state={//current object
            id:this.props.id,
            name:"Ujefa",
            age:30
        }
   }
//   state={//state is nothing but attributes
//     id:this.props.id,
//     name:"Ujefa",
//     age:30

//   }
    render() {
    return (
      <div>
            <h1>Id:{this.state.id}</h1>
            <h1>Name:{this.state.name}</h1>
            <h1>AGe:{this.state.age}</h1>
      </div>
    )
  }
}
// for state we can make within a class and within a constructor. 