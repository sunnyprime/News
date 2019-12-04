import React, { Component } from 'react'
import { data } from "../Data/data"
import Newslist from "../Component/Newslist";
import axios from 'axios'
import News from './News';

export default class Home extends Component {
    

    state = {
        news:[]
    }


    componentDidMount(){
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=74859dfb015743508a084921fa355220`;
        console.log(url);
        
        axios.get(url)
            .then(res => {
                this.setState({
                    articles: res.data,
                    news:res.data.articles
                })
                console.log("home data");                
                 console.log(res.data);                 
            })
    }
   
    render() {
        // console.log(this.state.news[0])
        // console.log("test");
        
        return (
            
            <div className="container">
            <div className="row">
                <div className="col align-item-center">
                <br/>
                <center><h1> Today's Headline of the day</h1></center>
                </div>
            </div>
            

                <Newslist news={this.state.news}></Newslist>
                
                {/* <h3>{this.state.news[0].title} </h3>
                <br/><br/>
                <img src={this.state.news[0].urlToImage} height="250" width="500px" alt=""/> */}
                
            </div>
        )
    }
}
