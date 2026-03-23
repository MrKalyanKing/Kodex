import React, { useContext } from 'react'
import { AppContext } from '../Hooks/Usecontext';

const Header = (props) => {
    console.log("Header Rendered",props);
    const phone=useContext(AppContext)
    console.log(phone)
  return (
    <div>Header</div>
  )
}

export default React.memo(Header)