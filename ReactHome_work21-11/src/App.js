import React from "react";
import Main from "./components/Main/Main";
import CandyShop from "./components/CandyShop/CandyShop";
import Employees from "./components/Employees/Employees";
import Foods from "./components/Foods/Foods";
import Managers from "./components/Managers/Managers";



export default class App extends React.Component{
    constructor(){
      super()
    }
    render(){
      return(
        <div>
          <Main />
          <CandyShop />
          <Employees/>
          <Foods/>
          <Managers/>
        </div>
      )
    }
} 
