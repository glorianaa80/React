function GetData() {
  return new Promise((resolve, reject) => {
    fetch('https://api.pokemontcg.io/v1/cards')
      .then(result => result.json())
      .then(cards => {
        resolve(cards);
      });
  }) 
}
export default GetData;