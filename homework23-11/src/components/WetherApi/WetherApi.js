import { Component } from "react";
import axios from "axios";
import './WetherApi.css' 


export default class WetherApi extends Component{

    state={city:"",key:"3ea2acb526183189904890dbad0452df", display:"",minTemperture:"",maxTemperture:"",color:""}

    inputHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value);
    }


    getWeather=()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.state.key}`
        axios
        .get(url)
        .then((res)=>{
            this.setState({display:`The Max Temperature is ${(res.data.main.temp_max-273.15).toFixed(2)} °C 
                        and the Min Temperature is${(res.data.main.temp_min-273.15).toFixed(2)} °C`})
            this.setState({color:"wase"});
        })
        .catch((err)=>{
            console.log(err);
            if(err.response.status=== 404){
                this.setState({display:"That city could not be found"})
                this.setState({color:"jacob"})
            }
        })
    }

    render(){        
        return(
            <div className="container">
                <div className="header">
                <h1>What's the weather</h1>
                <h3 >Enter a name of a city</h3>
                </div>
                <input className="weatherInput" type="text" name="city" onChange={this.inputHandler} /><br/><br/>
                <button onClick={this.getWeather}>Submit</button>
                <div>
                    <p className={this.state.color} >{this.state.display}</p>
                </div>
            </div>
        )
    }
}