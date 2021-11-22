import { Component } from "react";

class ShowHide extends Component{
    state={isShow:true}
    
    toggleShow=()=>{ 
        this.setState({isShow: !this.state.isShow })
    }
    render(){
        return(
            <div>
                {this.state.isShow && <p>{this.props.text}</p>}
                <button onClick={this.toggleShow}>Click To Show/Hide</button>
            </div>
        )
    }
}

export default ShowHide;