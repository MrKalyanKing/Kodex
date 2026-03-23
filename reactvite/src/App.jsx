import React, { useEffect, useState } from 'react'
import Usecallback from './Hooks/Usecallback'
import Header from './component/Header'
import Usereducer from './Hooks/Usereducer'

const App = () => {

  console.log("App rendering..")
  const [toggle,setToggle]=useState(false)
  const [count,setCount]=useState(0)
  
  
 

 

  return(
    <div>
      <h1>App</h1>
      {toggle?<Header/>:<h1>Kalyan</h1>}

      <button onClick={()=>setToggle((prev)=>!prev)}>toggle</button>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>

    </div>
  )
}

export default App