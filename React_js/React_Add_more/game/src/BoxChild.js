import React, { useState } from 'react'

const BoxChild = ({ data, setData, child, updateChild, parentId, deleteChild }) => {
    const [edittask, SetEditTask] = useState({
        f_name: "",
        l_name: ""
    });
    console.log(child, 'll');

    const handleChange = (e, id) => {
        SetEditTask({ ...edittask, [e.target.name]: e.target.value })
        updateChild(parentId, child.id, edittask.f_name, edittask.l_name);
    }

    const deleteNode = () => {
        console.log("call");
        deleteChild(parentId, child.id);
    }

    return (

        <div className="box">
            <input type="text" name='f_name' value={edittask.f_name} onChange={(e) => handleChange(e, child.id)} />
            <input type="text" name='l_name' value={edittask.l_name} onChange={(e) => handleChange(e, child.id)} />
            <button className='btn-delete' onClick={() => deleteNode()}>Delete</button>
        </div>
    )
}

export default BoxChild