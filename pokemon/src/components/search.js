import React from 'react';
import '.././style.css';

function Search(props) {
  return(
    <form>
      <input value={props.value} onChange={props.onChange} className="search" type="text" placeholder="Search ..." />
      <button className="btn-search" type="button" >Search</button>
    </form>
  )
}

export default Search;