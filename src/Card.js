import React, { Component } from 'react';

class Card extends Component {
    render() {
        let style;
        if(this.props.isLiked) {
            style = {color: 'skyblue'};
        } else {
            style = {color: 'grey'};
        }
        return (
            <div className="col-md-3 my-1">
                <img src={this.props.src} alt={this.props.caption} />
                <p>{this.props.caption}</p>
                <i alt="heart" className="fa fa-heart" aria-hidden="true" style={style} />
            </div>
        );
    }
}

export default Card;