import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Hooks/Usecontext';

const Header = (props) => {
    console.log("Header Rendered");
    // const phone=useContext(AppContext)
    // console.log(phone)
    const helo= useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("Kalyan")
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[])

  console.log(helo)//undefined
  return (
    <div>Header</div>
  )
}

export default React.memo(Header)