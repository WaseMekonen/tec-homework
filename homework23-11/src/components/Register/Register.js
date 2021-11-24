import { Component } from "react";
import './Register.css'

export default class Register extends Component{

    state={ firstName:"",lastName:"",email:"",password:"",confirmPassword:""}

    inputsHandlers = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        // console.log(e.target.value);    
        console.log(this.state.firstName);   
    }

    loginValidation = ()=> {
       return this.state.firstName.length > 5 && this.state.lastName.length > 5 && this.state.password === this.state.confirmPassword
    }


    logValues=(e)=>{
       e.preventDefault()
        console.log(`FirstName: ${this.state.firstName} LastName: ${this.state.lastName} Email: ${this.state.email} Password: ${this.state.password} ConfirmPassword${this.state.confirmPassword}`);
    }    
    
    
    render(){
        const disabled = !this.loginValidation()
        return(
            <div>
                <form>
                <h1>Register</h1>
                <span>Create your account it's free and only takes a minute</span>
                <br/>
                <br/>
                <input type="text" placeholder="First Name"  name="firstName" onChange={this.inputsHandlers}/>
                <input type="text" placeholder="Last Name" name="lastName" onChange={this.inputsHandlers}/>
                <br/>
                <br/>
                <input type="email" placeholder="Email" name="email" required onChange={this.inputsHandlers}/>
                <br/>
                <br/>
                <input type="password" placeholder="Password" name="password" onChange={this.inputsHandlers}/>
                <br/>
                <br/>
                <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={this.inputsHandlers}/>
                <br/>
                <br/>
                <input type="checkbox" name="terms"/>
                <label>i accept the Terms of Use & Privacy Policy</label>
                <br/>
                <br/>
                 <button className="registerButton" disabled={disabled} onClick={this.logValues}>Register Now</button>
                </form>
            </div>
        )
    }
}