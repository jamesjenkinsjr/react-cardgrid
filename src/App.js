import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super(); //This makes sure that the app becomes a component
    this.state = {
      cards: [
        {
          src: 'https://via.placeholder.com/150x350',
          caption: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          isLiked: true
        }, 
        {
          src: 'https://via.placeholder.com/150x350',
          caption: 'Wow wow wow wow wow wow wow wow',
          isLiked: false
        }
      ]
    }
  }
  render() {
    console.log(this.state);
    return (
        <div className="container">
          <h1>CardGrid</h1>

        </div>
    );
  }
}

export default App;
