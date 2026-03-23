import React, { createContext } from 'react'


export const AppContext=createContext()

const ContextProvider=(props)=>{
    const phone="93929039"
    return(
        <AppContext.Provider value={phone} >
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider