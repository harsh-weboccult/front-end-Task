import React from 'react'

const Select = ({ Select }) => {
    console.log(Select);
    return (
        <>
            <select name="" id="">
                <option value="">Select Value</option>
                {Select.map((ele) => {
                    return (<option>{ele.name}</option>)
                })}
            </select>
        </>
    )
}

export default Select