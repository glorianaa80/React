import React from 'react';
import ImageCard from './components/cards';

class CardImage extends React.Component {
  constructor(props) {
    super(props);
    this.cards = props.cards;
    console.log(props.cards)
  }
 
  render() {
    return(
      <div>
        {this.cards.map(c => <ImageCard card={c}/>) }
      </div>
    )
  }
}

export default CardImage;


