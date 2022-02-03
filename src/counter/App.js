import { useState } from "react";
import React  from "react";
import style from './style.css'

const App=()=>{

    const a=5;
    const b=3;
    const Increment=()=>{
        return setCount(a+b)
    }
    const Decrement=()=>{
        return setCount(a-b)
    }
    
    const[count,setCount]=useState(0)
    return(
        <div className='abc'>
            <h1>Calculator</h1>
            {a}+{b}={count}
            <br />
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </div>

    )
}

export default App;