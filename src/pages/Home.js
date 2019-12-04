import React, { Component } from 'react'
import { data } from "../Data/data"
import Newslist from "../Component/Newslist"

export default class Home extends Component {
    

    state = {
        news:data.articles
    }
   
    render() {
        // console.log(this.state.news[0])
        // console.log("test");
        
        return (
            
            <div className="container">
            <h1> Today's Headline of the day</h1>

                <Newslist news={this.state.news}></Newslist>
                
                {/* <h3>{this.state.news[0].title} </h3>
                <br/><br/>
                <img src={this.state.news[0].urlToImage} height="250" width="500px" alt=""/> */}
                
            </div>
        )
    }
}
