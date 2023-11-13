import React, { Component } from 'react'
import StudMarks from './StudMarks'

export default class StudDetails extends Component {
  render() {
    return (
      <div> <h1>this is StudDetails component ...</h1>
      <h1>Roll:{this.props.roll}</h1>
      <h1>Name:{this.props.name}</h1>
<StudMarks roll_no={this.props.roll} marks={this.props.marks}/>
      </div>

      
    )
  }
}
