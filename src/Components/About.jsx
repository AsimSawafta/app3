import React from 'react'
import { useState } from 'react';
export default function About() {

    let [count,setCount] = useState(4);
    function changeCount(){
        setCount(count++)
}
  return (
    <>
    <div>count is{count}</div>
    <button onClick={changeCount}>+++</button>
    </>
  )
}
