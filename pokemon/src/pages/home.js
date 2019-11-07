import React, { useState } from 'react';
import CardImage from '../render';
import GetData from '../services/fetch';
import Nav from '../components/nav';


export default () => {
 
  const [d, gd] = useState([]);
  GetData().then(({ cards }) => gd(<CardImage cards={cards} />));
  return (
    <div className="App">
      <h1 className='title'>Poke API</h1>
      <Nav cards={d}/>
      {d}
    </div>
  );
}
