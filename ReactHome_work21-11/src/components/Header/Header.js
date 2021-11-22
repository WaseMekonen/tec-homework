import React,{Component} from "react";
import './Header.css'

export default class Header extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="container">
                <img className="logo" src="https://ibb.co/JQkM1Q6" alt="logo"/>
                <h2 className="name">Wase Mekonen</h2>
            </div>
        ) 
    }
}