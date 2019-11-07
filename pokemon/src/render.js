import React from 'react';
import ImageCard from './components/cards';
import Search from './components/search';

class CardImage extends React.Component {
  constructor(props) {
    super(props);
    this.cards = props.cards;
    this.state = {
      cardName : [],
      textSearch : ''
    }
    console.log(this.cards)
    this.filtrado = this.filtrado.bind(this);
  }


  filtrado(e) {
    const text = e.target.value;
    const newData = this.cards.filter(function (item) {
      const itemData = item.name.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })

    this.setState({
      cardName: newData,
      textSearch: text,
    })
  }

  render() {
    const arrayMatch = this.state.cardName;
    const arrayAll = this.cards
    return(
      <div>
        <Search value={this.state.text} onChange={this.filtrado} />
        {
          arrayMatch.length ? arrayMatch.map(c => <ImageCard  card={c} />) : 
          arrayAll.map(c => <ImageCard  card={c} />)
        }
      </div>
    )
  }
}

export default CardImage;


