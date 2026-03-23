import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Hooks/Usecontext';

const Header = (props) => {
    console.log("Header Rendered");
    // const phone=useContext(AppContext)
    // console.log(phone)
     useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("Kalyan")
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[])
  return (
    <div>Header</div>
  )
}

export default React.memo(Header)