import React,{Component} from "react";
import './Footer.css'


export default class Footer extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="footerContainer">
                <form>
                    <div>
                    <label>name</label>
                    <input type="text"></input>
                    </div>
                    <div>
                    <label>E-mail</label>
                    <input type="email"></input>
                    </div>
                    <div>
                    <label>Message</label>
                    <textarea >Enter text here...</textarea>
                    </div>
                </form>
            </div>
        ) 
    }
}