import React, { Component } from 'react'

export default class News_thumb extends Component {
    render() {
        const cardstyle={width: "18rem",
                        minwidth: "18rem"};
        const {title,img} = this.props
        return (
            
            <>
            <div className="card" style={cardstyle}>
            <img src={img} class="card-img-top" alt="image"></img>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            </div>
            </div>

                
                
                </>

           
        )
    }
}
