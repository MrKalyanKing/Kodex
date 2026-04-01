import React, { useState } from 'react'
import Header from '../component/Header'

const UseLayout = () => {
    const [toggle,setToggle]=useState(false)
    const [count,setCount]=useState(0)
    useLayoutEffect(() => {
      console.log("Hello Layout")
    }, [])
  return (
    <div>
    {toggle?<Header/>:<h1>Kalyan</h1>}

      <button onClick={()=>setToggle((prev)=>!prev)}>toggle</button>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
    </div>
  )
}

export default UseLayout


//useLayoute Effect -> synchronuus
//Use Effect -> Asynchronous
//commitPhase(reflow,repaint) (useLayoutEffect)
//mounting ->useLayoutEffect ->(reflow,repaint) ->changes 

//2.useEffect 
// mounting -> reflow/repaint ->changes -> useEffect

