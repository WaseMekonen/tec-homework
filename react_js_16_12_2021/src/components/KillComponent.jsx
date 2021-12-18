import React, { useEffect } from "react";

const KillComponent = () => {
  useEffect(() => {
    console.log("Mount");
    return () => {
      console.log("Unmpunt");
    };
  });
  
  return (
    <div>
      <h2>useEffect_4</h2>
    </div>
  );
};

export default KillComponent;
