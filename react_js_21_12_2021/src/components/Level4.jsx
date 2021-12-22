import React, { useContext } from "react";
import { userContext } from "../contex/userContext";

function Level4() {
  const user = useContext(userContext);
  return (
    <div>
      <h4 style={{border:"2px solid blue"}}>Level 4</h4>
      <p>
        {user.name},{user.email},{user.adress}
      </p>
    </div>
  );
}

export default Level4;
