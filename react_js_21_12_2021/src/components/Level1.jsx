import React from "react";
import Level2 from "./Level2";
import { userContext } from "../contex/userContext";

function Level1() {
  const user = {
    name: "Tim",
    email: "Tim123@Gmail.com",
    adress: "New-york,USA",
  };

  return (
    <div>
      <h4 style={{border:"2px solid blue"}}>Level 1</h4>
      <userContext.Provider value={user}>
        <Level2 />
      </userContext.Provider>
    </div>
  );
}

export default Level1;
