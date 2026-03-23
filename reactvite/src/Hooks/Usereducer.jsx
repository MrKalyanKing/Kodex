import React, { useReducer } from 'react'

const Usereducer = () => {
    // useReducer(reducer,state)
    // useReducer(reducer,{count:0})

    const initialState={count:0}


    const reducer=(state,action)=>{
        switch(action.type){
            case 'increase':{
                return {count:state.count+1}
            }
            case 'decrease':{
                return {count:state.count-1}
            }
            default : {
                return state
            }
        }
    }


     const[state,dispatch] =useReducer(reducer,initialState)
  return (
    <div>
        {state.count}
        <button onClick={()=>dispatch({type:'increase'})} >increase</button>
        <button onClick={()=>dispatch({type:'decrease'})}>decrease</button>

    </div>
  )
}

export default Usereducer