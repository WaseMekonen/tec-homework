import React from "react";
import '../Foods/Foods.css'



export default class Foods extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="foodsContainer">
                <div className="foods">
                    <div className="card">
                        <h1>Pizza</h1>
                        <p>pizza served in formal settings, such as at a restaurant, is presented unsliced, and is eaten with the use of a knife and fork</p>
                        <img className="foodsImg" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                    </div>
                    <div className="card">
                        <h1>Salads</h1>
                        <p>A salad is a dish consisting of mixed pieces of food, typically with at least one raw ingredient. They are often dressed, and typically served at room temperature or chilled, though some can be served warm</p>
                        <img className="foodsImg" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                    </div>
                    <div className="card">
                        <h1>Desserts</h1>
                        <p>The term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, macaroons, sweet soups, tarts and fruit salad</p>
                        <img className="foodsImg" src="https://images.unsplash.com/photo-1516557977083-86bf43fe24ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}