import React, { useRef } from 'react'

interface Props
{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.SyntheticEvent)=>void;
}

const InputFeild= ({todo,setTodo,handleAdd}:Props) => {
    const inputref=useRef<HTMLInputElement>(null);
  return (
    <>
    <form className='input' onSubmit={(e)=>
        {handleAdd(e)
         inputref.current?.blur();
         }}>
        <input type="text"  ref={inputref} value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter Your Task' className='Input__box' />
        <button className='Input_submit' type='submit'>Go</button>
    </form>
    </>
  )
}

export default InputFeild