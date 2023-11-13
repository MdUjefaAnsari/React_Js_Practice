import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MypropsCheck
 extends Component {
  render() {
    return (
      <div>
        <h1>Id:{this.props.id}</h1>
        <h1>name:{this.props.name}</h1>
        <h2>Children: {this.props.children}</h2>
      </div>
    )
  }
}
MypropsCheck.propTypes={
    id:PropTypes.number.isRequired,
    name:PropTypes.string
   
}
MypropsCheck.defaultProps={
  name:"CNC WEB WORLD"//this is default value
}
