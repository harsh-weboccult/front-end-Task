import React, { useEffect, useState } from 'react'
import Box from './Box'
import './App.css'
var count = 1;
const App = () => {
    const [data, setData] = useState([{
        id: count,
        value: "",
        child: []
    }]);


    
    


    const AddBox = (e) => {
        count = count + 1;
        setData((prev) => [...prev, { id: count, value: "", child: [] }])

    }



    return (
        <>
            <div className='row'>

                <div className='left'>
                    <button onClick={AddBox} className="btn-add">Add More</button>
                    {data.map((ele,index) => {

                        return (
                            <Box key={index} data={data} setData={setData} sData={ele} />
                        )
                    })}
                </div>

                <div className="right">
                   <h1>Specification</h1>
                    {
                        data.map(element => {
                            return (
                                <div key={element.id} className="box1">
                                    <h1>{element.value}</h1>
                                <div >
                                    {element.child.length > 0 
                                      && element.child.map(ele => (
                                    <div key={ele.id} className="small-box">
                                    <div className='left'>{ele.f_name}</div>
                                    <div className='right'> {ele.l_name}</div>
                                    </div>
                                      
                                      ))}
                                </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>


        </>
    )
}

export default App