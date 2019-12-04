import React, { Component } from 'react'
import News_thumb from './News_thumb'
import News from '../pages/News';

export default class Newslist extends Component {
    render() {
        console.log("test");
        const {news} = this.props
        console.log(news);
        return (
            <div className="row justify-content-md-between">
            
            
                {news.map(news => (
                    <div className="column py-5">
                    
                    <News_thumb title={news.title} img={news.urlToImage} />
                    </div>
                ))}
            
                {/* <News_thumb></News_thumb> */}
            </div>
        )
    }
}
