import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';


function App() {
  const balance = useSelector((state:any)=>state.balance)
  return (

    <>
    <div className='App'>
    <Deposit balance={balance}/>
    <br/>
    <Withdraw/>
    <br/>
    <div>{balance}</div>
    </div>
    </>
  );
}

export default App;
