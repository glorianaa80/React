import React from 'react';
import '.././style.css'

function ImageCard(props){
  return <img className='img-space' src={props.imagen} alt="Cartas de Pokemon"/>
}

export default ImageCard;