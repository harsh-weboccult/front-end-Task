import React, { Component } from 'react'

export default class RenderProp1 extends Component {
     
     
     
  render() {
    const{counter,incrementCount}=this.props;
    return (
      <>
         <>
        <p>{counter}</p>
        <button onMouseEnter={incrementCount}>Click to incremant</button>
      </>
      </>
    )
  }
}
