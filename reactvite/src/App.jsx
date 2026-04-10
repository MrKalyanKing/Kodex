import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Usecallback from './Hooks/Usecallback'
import Header from './component/Header'
import Usereducer from './Hooks/Usereducer'
import UseEffect from './Hooks/UseEffect'
import UseLayout from './Hooks/UseLayout'

const App = () => {

  console.log("App rendering..")
  const [toggle,setToggle]=useState(false)
  const [count,setCount]=useState(0)

  const divref=useRef({})
  // console.log(divref);
  
  
  // useLayoutEffect(()=>{
  //   divref.current.style.backgroundColor="red"
  //   divref.current.style.transform="translateX(40px)"
  // },[])
  //  useEffect(()=>{
  //   divref.current.style.backgroundColor="blue"
  //   divref.current.style.transform="translateX(40px)"
  // },[])
 
  // setCount((prev)=>prev+1)
  // useEffect(()=>{
  //   setCount((prev)=> prev+1)
  //   setCount((prev)=> prev+1)
    
  // },[])

 useEffect( () => {
  setCount(prev => prev + 1);

  console.log(count);

  setCount(prev => prev + 1);
},[]);
  return(
    <div ref={divref}>
      <h1>App</h1>
      <h1>{count}</h1>
      <h1>{count}</h1>
<button
  
>
  Increment Twice
</button>

    </div>
  )
}

export default App