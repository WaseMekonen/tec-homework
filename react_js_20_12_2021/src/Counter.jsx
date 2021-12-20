import React, { useEffect, useState } from "react";

const Counter = ({userInput})=>{
    const [counter,setCounter]=useState(userInput)

    useEffect(()=>{
        setCounter(userInput)
    },[userInput])

    return(
        <div>
            <h4>{counter}</h4>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Increment</button>
        </div>
    )
}

export default Counter