import React, { Component } from 'react'

export default class Counter extends Component {

    constructor() {
        super();
        this.state = {
          counter: 0,
        };
      }
      incrementCount=()=>{
        this.setState(prev=>{
           return  {counter:prev.counter+1}
        })
       }
  render() {
    return (
      <div>{
          this.props.render(this.state.counter,this.incrementCount)
        }</div>
    )
  }
}
