import React, { useState } from 'react'
import InputFeild from './Component/InputFeild'
import './App.css'
import { todo } from './model';
import TodoList from './Component/TodoList';

const App :React.FC  = () => {    //react with functional component in typeScript
    const [todo,setTodo]=useState<string>("");
    const [todos,setTodos]=useState <todo[]> ([]);
  
      //console.log(todo);
      const handleAdd=(e: React.SyntheticEvent)=>{
            e.preventDefault();
            if(todo)
            {
                setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
                setTodo(" ");
                console.log(todos);
                
            }
            }
  return (
   <> 
   <h1>Taskify</h1>
   <InputFeild  todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    <TodoList  todos={todos} setTodos={setTodos}/>
   </>
  )
}

export default App