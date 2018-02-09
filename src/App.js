import React, { Component } from 'react';
import Card from './Card';
class App extends Component {
  constructor() {
    super(); //This makes sure that the app becomes a component
    this.state = {
      cards: [
        {
          src: 'https://via.placeholder.com/150x150',
          caption: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          isLiked: true
        }, 
        {
          src: 'https://via.placeholder.com/150x150',
          caption: 'Wow wow wow wow wow wow wow wow',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/150x150',
          caption: 'Wow wow wow wow wow wow wow wow',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/150x150',
          caption: 'Wow wow wow wow wow wow wow wow',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/150x150',
          caption: 'Wow wow wow wow wow wow wow wow',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/150x150',
          caption: 'Wow wow wow wow wow wow wow wow',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/150x150',
          caption: 'Wow wow wow wow wow wow wow wow',
          isLiked: false
        },{
          src: 'https://via.placeholder.com/150x150',
          caption: 'Wow wow wow wow wow wow wow wow',
          isLiked: false
        }
      ]
    }
  }
  render() {
    const { cards } = this.state;
    const CardGrid = cards.map((card, index) =>  <Card 
      key={index} 
      src={card.src} 
      caption={card.caption} 
      isLiked={card.isLiked} /> )
    return (
        <div className="container">
          <h1>CardGrid</h1>
          {/*Use iteration to make a bunch of cards*/}
          <div className="row">
            { CardGrid }
          </div>
        </div>
    );
  }
}

export default App;
