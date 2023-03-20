import React, { Component } from "react";

export default class RenderProp extends Component {


  render() {
    const  {counter,incrementCount}=this.props;
    return (
      <>
   
        <p>{counter}</p>
        <button onClick={incrementCount}>Click to incremant</button>
      </>
    );
  }
}
