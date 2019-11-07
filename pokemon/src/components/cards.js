import React from 'react';
import '.././style.css';
import Start from './start';

function ImageCard(props) {
  return (
    <div className="wapper-card" key={props.card.id}>
      <h2 className="card-title"> {props.card.name} </h2>
      <button className='img-space'>
        <img src={props.card.imageUrl} alt="Cartas de Pokemon" />
      </button>
      <Start />
    </div>

  )
}

export default ImageCard;