import React from "react";
import '../Managers/Managers.css'



export default class Managers extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="managersContainer">
               
                    <div className="cardManagers">
                        <img className="managersImg" src="https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?b=1&k=20&m=1319763895&s=170667a&w=0&h=jhqKyg62cQVZ-NjDQjpcenCdHDrprkN4caRjk4K76E8=" alt=""/>
                        <h2>Adrian Scold</h2>
                        <p>Financial Director</p>
                    </div>
                    <div className="cardManagers">
                        <img className="managersImg" src="https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik=" alt=""/>
                        <h2>Katty Nelson</h2>
                        <p>Advertising Manager</p>
                    </div>
                    <div className="cardManagers">
                        <img className="managersImg" src="https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?b=1&k=20&m=1319763830&s=170667a&w=0&h=wE44n9yP1nrefeqv5DCl5mE3ouU01FNNHeZPR0yDCWA=" alt=""/>
                        <h2>Jennie Clarke</h2>
                        <p>Secretory</p>
                    </div>
                
            </div>
        )
    }
}