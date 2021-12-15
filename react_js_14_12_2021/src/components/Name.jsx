import React, { useState } from "react";

export default function Name({name}) {

const [nameColor, setNameColr]=useState(true)

  return (
    <>
      <h4>useState_4</h4>
      <h3 style={{color:!nameColor?"green":"red"}} onClick={()=>(
          setNameColr(!nameColor)
      )}>{name}</h3>
    </>
  );
}
