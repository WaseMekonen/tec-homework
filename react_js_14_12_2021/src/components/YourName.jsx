import React, { useState } from "react";

export default function YourName() {
  const [nameColor, setColor] = useState(true);


  return (
    <div>
        <h4>useState_1</h4>
      <h3 style={{color:nameColor?"green":"red"}} onClick={()=>setColor(!nameColor)}>wase</h3>
    </div>
  );
}
