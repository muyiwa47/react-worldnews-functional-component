import React, {useRef} from 'react';
import './filterByGenre.css';

export default function FilterByGenre(props) {
  let genre = ["general", "business", "technology", "sports", "entertainment", "health", "science"];
  const genreRef = useRef();
  function onSelect(){
    console.log(this);
  }
  return (
      genre.map((item) => {
        return (
            <div className="genreList" key={item}>
              <label>{ item.toUpperCase() }</label>
              <input type="checkbox" onChange={onSelect.bind(this, item)}  value={item} ref={genreRef} />
            </div>
         )
      })
  );
}