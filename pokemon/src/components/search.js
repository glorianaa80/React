import React from 'react';
import '.././style.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      cards: props.cards,
      textSearch: ''
    }
    console.log(props.cards)
    this.filtrado = this.filtrado.bind(this);
  }

  filtrado(event) {
    var text = event.target.value;
    console.log(this.state.cards);
    let newData = this.state.cards.filter(function(item){
      text.toLowerCase();
      console.log(text.toLowerCase() + ' ' + item.name.toLowerCase());

      if (item.name.toLowerCase() === text) {
        console.log('hizo match' + text);
      } else {
        console.log('no hizo match' + text);
      }
      return item;
    })
    console.log(this.state.cards);
    console.log(newData);
    this.setState({
      card: newData,
      textSearch: text
    })
  }

  render() {
    return (
      <form>
        <input value={this.state.text} onChange={this.filtrado} className="search" type='text' placeholder='Card Name'></input>
        <button className="btn-search" type='submit'>Search</button>
      </form>
    )
  }
}

export default Search;