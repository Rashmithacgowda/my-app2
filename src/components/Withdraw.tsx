import React, { useState } from "react";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";

import { ActionType } from "../store/actiontypes";

const Withdraw=()=>{
    const [value,setValue]=useState("")
    const dispatch = useDispatch();
    
    const handleWithdraw =()=>{ 
    dispatch({type:ActionType.WITHDRAW})
    }
    
    
    

return(
<>
<h1>Withdrawal</h1>
<input value={value} onChange={(e)=>setValue(e.target.value)}/><button onClick={()=>handleWithdraw()}>WITHDRAW</button>
</>
)
}
export default Withdraw;

