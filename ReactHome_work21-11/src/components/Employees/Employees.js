import React from "react";
import '../Employees/Employees.css'



export default class Employees extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="employeeContainer">
                <div className="employee">
                    <div>
                        <img className="employeeImg" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h1>Connor Quinn</h1>
                        <p>Executive chef</p>
                    </div>
                    <div>
                        <img className="employeeImg" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuYWdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h1>Samuel Schick</h1>
                        <p>Restaurant Manager</p>
                    </div>
                    <div>
                        <img className="employeeImg" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h1>Fred Morrison</h1>
                        <p>Co-Chef</p>
                    </div>
                    <div>
                        <img className="employeeImg" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h1>Celia Almeda</h1>
                        <p>Co-Chef</p>
                    </div>
                </div>
            </div>
        )
    }
}