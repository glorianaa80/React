import React from 'react';
import ImageCard from './components/cards';

class CardImage extends React.Component {
  constructor(props) {
    super(props);
    this.cards = props.cards;
  }
 
  render() {
    return(
      <div>
        {this.cards.map(c => <ImageCard imagen={c.imageUrl}/>) }
      </div>
    )
  }
}

export default CardImage;


