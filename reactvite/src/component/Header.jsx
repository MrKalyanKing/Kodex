import React, { useContext } from 'react'
import { AppContext } from '../Hooks/Usecontext';

const Header = (props) => {
    console.log("Header Rendered");
    // const phone=useContext(AppContext)
    // console.log(phone)
  return (
    <div>Header</div>
  )
}

export default React.memo(Header)