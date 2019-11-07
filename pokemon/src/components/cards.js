import React from 'react';
import '.././style.css';
import Start from './start';
import { Link } from 'react-router-dom'

function ImageCard(props) {
  const pokemonName = props.card.name;
  return (
    <div className="wapper-card" key={props.card.id}>
      <h2 className="card-title"> {props.card.name} </h2>
      <Link to={{pathname:`/pokemon/${pokemonName}`, id: pokemonName}} className='img-space'>
        <img id={props.card.id} src={props.card.imageUrl} alt="Cartas de Pokemon" />
      </Link>
      <Start />
    </div>

  )
}

export default ImageCard;