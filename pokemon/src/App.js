import React, {useState} from 'react';
import CardImage from './render';
import GetData from './services/fetch';

function App() {
  const [d, gd] = useState([]);
  GetData().then(({cards}) => gd(<CardImage cards={cards}/>));
  return (
    <div className="App">
      {d}
    </div>
  );
}

export default App;