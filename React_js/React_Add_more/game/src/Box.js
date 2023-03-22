import React, { useState } from 'react'
import BoxChild from './BoxChild';
let count = 100000;
const Box = ({ data, setData, sData }) => {
    const [edittask, SetEditTask] = useState();
    const [childdata, setChildData] = useState([]);

    //For Storing  Task Data
    const HandleChange = (e) => {
        SetEditTask(e.target.value)
    }


    // for updating child
    const updateChild = (parentId, childId, fname, lname) => {
        const a = data;
        let up = a.map(item => {
            if (item.id === parentId) {
                let newItem = {
                    ...item,
                    child: item.child.map(childItem => {
                        if (childItem.id === childId) {
                            // setChildData((prev) => [{ ...childItem, f_name: fname, l_name: lname }])
                            setChildData(prev => prev.map((ele) => (
                                ele.id === childId ? { ...ele, f_name: fname, l_name: lname } : ele
                            )))
                            return { ...childItem, f_name: fname, l_name: lname }

                        }
                        return childItem;
                    })
                }
                return newItem;
            }
            return item;
        }
        )
        console.log('called', parentId, childId, fname, lname, up);

        setData(up);
    }

    //for deleting child
    const deleteChild = (parentId, childId) => {
        console.log("functio");
        const b = data;
        let up = b.map(item => {
            if (item.id === parentId) {
                let NewItem = {
                    ...item,
                    child: item.child.filter(childItem => {

                        setChildData(prev => prev.filter((ele) => (
                            ele.id !== childId
                        )))

                        return childItem.id !== childId;
                    })
                }
                return NewItem;
            }
            return item;
        })
        console.log('called', parentId, childId, up);
        setData(up);
        console.log(data);

    }


    //for adding child
    const AddChild = (e, id) => {
        count = count + 1;
        setChildData((prev) => [...prev, { id: count, f_name: "", l_name: " " }]);
        setData(prev => prev.map((ele) => (
            ele.id === id ? { ...ele, child: childdata } : ele
        )))
        // setData(data.map((ele) => (
        //     ele.id === id ? { ...ele, child: childdata } : ele
        // )))
    }


    //handle Submit
    const HandleSubmit = (e, id) => {
        e.preventDefault();
        setData(prev => prev.map((ele) => (
            ele.id === id ? { ...ele, value: edittask } : ele
        )))
        console.log(data);
    }


    return (
        <>
            <div className="box" key={data.id}>
                <form action="" onSubmit={(e) => HandleSubmit(e, sData.id)}>
                    <input type="text" onChange={HandleChange} value={edittask} name="" id="" />
                    <button type='button' className='btn-child' onClick={(e) => AddChild(e, sData.id)}>Add Child</button>
                    <button type='Submit' className='btn-submit ' onSubmit={(e) => HandleSubmit(e, sData.id)}>Submit</button>

                    {     
                        childdata.map((ele) => {
                            console.log("clield",childdata)
                            return (
                                <BoxChild parentId={sData.id} deleteChild={deleteChild} updateChild={updateChild} data={data} setData={setData} child={ele} />
                            )
                        })
                    }
                </form>
            </div>
        </>
    )
}

export default Box