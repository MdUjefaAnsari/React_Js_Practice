import React, { Component } from 'react'

export default class StudMarks extends Component {
  render() {
    return (
      <div>this is StudMarks component ...
        <h2>Roll:{this.props.roll_no}</h2>
        <h2>marks:{this.props.marks}</h2>
      </div>

    )
  }
}
