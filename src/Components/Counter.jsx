import React, { useState } from 'react'
import './counter.css'

const Counter = () => {

  const[count,setCount] = useState(0);

  const iCount =()=>{
    setCount(count+1);
  }
  const dCount = ()=>{
    setCount(count-1);
  }

  return (
    <>
    <div className='container'>
        <h1 >Counter App</h1>
          <button className='button' onClick={iCount}>+</button>
          <p>{count}</p>
          <button className='button' onClick={dCount}>-</button>
      </div>
    </>
  )
}

export default Counter
