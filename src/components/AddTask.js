import React, { useState } from 'react'

function AddTask({addTask}) {
    const [value,setValue]=useState("")
    const addItem = ()=>{
      addTask(value)
      setValue("")
    }
  return (
    <>
        <div className='input-container' >
           <input type="text" className='input'              placeholder='Add a new task '
             value={value}
             onChange={(e)=>{setValue(e.target.value)}}

             />
           <button onClick={addItem} className='add-btn'>+</button>
        </div>
      
    </>
  )
}

export default AddTask
