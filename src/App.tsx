import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';


function App() {
  const balanc = useSelector((state:any)=>state.balance)
  return (

    <>
    <div className='App'>
    <Deposit balance={balanc}/>
    <br/>
    <Withdraw/>
    <br/>
    <div>{balanc}</div>
    </div>
    </>
  );
}

export default App;
