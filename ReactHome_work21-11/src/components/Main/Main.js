import React,{Component} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import './Main.css'

export default class Main extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="main-cotainer">
                    Main
                    <div className="about-me"></div>
                    <div className="picContainer">
                        <img className="myPic" src="https://o.remove.bg/downloads/236247f0-7a32-4e47-b505-98d1d231138c/linkedIn-photo-removebg-preview.png"></img>
                    </div>
                    <div className="myVideo"></div>
                </div>
                <Footer/>
            </div>
        ) 
    }
}