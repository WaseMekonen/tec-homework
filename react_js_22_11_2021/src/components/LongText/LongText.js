import { Component } from "react";

class LongText extends Component{
    render(){
        let styleColor = {color:"red"}
        if(this.props.text.length>5){
            styleColor = {color:"green"}
        }
        return(
            <div>
                <h2 style={styleColor}>{this.props.text}</h2>
            </div>
        )
    }
}

export default LongText;