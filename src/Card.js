import React, { Component } from 'react';

class Card extends Component {
    render() {
        //Look up and think about the ternary operator.  Sometimes known as 'elvis' operator
        const style = {
            color: this.props.isLiked ? 'skyblue' : 'grey',
        }
        const classes = this.props.isLiked ? 'fa fa-heart' : 'fa fa-heart-o';
        return (
            <div className="col-md-3 my-1">
                <img src={this.props.src} alt={this.props.caption} />
                <p>{this.props.caption}</p>
                <i alt="heart" className={classes} aria-hidden="true" style={style} />
            </div>
        );
    }
}

export default Card;