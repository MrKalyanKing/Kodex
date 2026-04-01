import React, { useState } from 'react'
import Header from '../component/Header'

const UseEffect = () => {
    const [toggle,setToggle]=useState(false)
    const [count,setCount]=useState(0)
      
  return (
    <div>
    {toggle?<Header/>:<h1>Kalyan</h1>}

      <button onClick={()=>setToggle((prev)=>!prev)}>toggle</button>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
    </div>
  )
}

export default UseEffect


//