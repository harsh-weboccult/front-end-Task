import React, { Component } from 'react'
import Counter from './ConponentJs/Counter.jsx'
import RenderProp from './ConponentJs/RenderProp.jsx'
import RenderProp1 from './ConponentJs/RenderProp1.jsx'
import User from './ConponentJs/User.jsx'

export default class App extends Component {
  render() {
    return (
     <>
      {/* <RenderProp/>
      <RenderProp1/> */}
      <Counter render={(counter,incrementCount)=> (<RenderProp counter={counter} incrementCount={incrementCount}> </RenderProp>)} />
      <Counter render={(counter,incrementCount)=> (<RenderProp1 counter={counter} incrementCount={incrementCount}> </RenderProp1>)} />

       <User name={(isLogin)=>(isLogin)?"harsh":"guest"} />
     </>
     
    )
  }
}
