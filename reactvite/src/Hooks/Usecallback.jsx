import React, { useCallback, useState } from 'react'
import Header from '../component/Header';

const Usecallback = () => {

    const[count,setCount]=useState(0);

    // const fn=()=>{}
        //here the header is not render 
        // const fn=useCallback(()=>{},[])

        //Her whenever the count changes it will render again
        const fn=useCallback(()=>{},[count])
    
  return (
    <div>
        <Header fn={fn} />
        <h1>{count}</h1>
        <button onClick={()=>setCount((prev)=>prev+1)} >click Here</button>

    </div>
  )
}

export default React.memo(Usecallback)
// here component re-render is managed with memo method  