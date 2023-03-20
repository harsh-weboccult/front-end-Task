import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div>{this.props.name(false)}</div>
    )
  }
}
