import React from 'react';
import './filter.css';

export default function Filter(props){
    let categories = ['GENERAL', 'BUSINESS', 'TECHNOLOGY', 'SPORTS', 'ENTERTAINMENT', 'HEALTH', 'SCIENCE'];
    function showMenu(e){
      if (e.target.className === 'container') {
          e.target.children[0].classList.toggle("slideout");
      }
    }

    return (

        <div className="container" onClick={showMenu}>
        <div className="filter">
           { categories.map((category) => {
              return (
                  <div key={category} className="checkbox-genre">
                       <input type="radio" name="category" id={category} onChange={props.filterSources} />
                      <label htmlFor={category}>{category}</label>
                  </div>
              )
            })}

        </div>
        </div>

      )
}