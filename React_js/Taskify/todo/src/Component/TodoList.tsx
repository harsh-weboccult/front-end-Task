import React from 'react'
import { todo } from '../model'

interface props
{
    todos:todo[],
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>
}
const TodoList = ({todos,setTodos}:props) => {
  return (
    <>
    {
       todos.map((ele)=>{
        return(
         <li>{ele.todo}</li>
        )
       })
    }
    </>
    
  )
}

export default TodoList