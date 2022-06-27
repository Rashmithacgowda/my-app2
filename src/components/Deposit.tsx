import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionType } from "../store/actiontypes";
// import { RootState } from "../store/reducer/combineReducers";

  
const Deposit=(props:number | any)=>{ 
    const [value,setValue]=useState("");
    // const state = useSelector((state: RootState) => state.reducer)
    const dispatch=useDispatch();


    const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>
 {
     event.preventDefault();

 }

const handleDeposit=()=>{
    console.log("test handle deposit")
    dispatch({type:ActionType.DEPOSIT, payload:value})
}


 return (
    <div>
        <p>{props.balance}</p>
        <h1>DEPOSIT</h1>
    <><input value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={()=>handleDeposit()}> DEPOSIT  </button></>
    </div>
 )
}
export default Deposit;




