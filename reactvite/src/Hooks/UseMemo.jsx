import React, { useState } from 'react'

const useMemo = () => {

  const [num,setNum]=useState(0)
  const [count,setCount]=useState(0)

  //Here the cube  function is calling on every state change of counter 
  function cube(num){
    console.log("calculation done!");
    
    return Math.pow(num,3)
  }

  // overcoming this probelem with useMemo
  const res=useMemo(()=> cube(num),[num])
  return (
    <div className='container' >
      <input type="text" name="" id="" onChange={(e)=>setNum(e.target.value)} />
      <h1>Cube of an Number{res}</h1>
      <button onClick={()=>setCount(count+1)} >Count++</button>
      <h1>{count}</h1>
    </div>
  )
}

export default UseMemo