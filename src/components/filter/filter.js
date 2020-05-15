import React from 'react';

export default function Filter(props){
    let categories = ['GENERAL', 'BUSINESS', 'TECHNOLOGY', 'SPORTS', 'ENTERTAINMENT', 'HEALTH', 'SCIENCE'];
      return (
        categories.map((category) => {
            return (
              <div style={{display : 'inline-block'}} key={category}>
                  <label htmlFor={category}>{category}</label>
                  <input type="radio" name="category" id={category} onChange={props.filterSources} />
              </div>
            )
          })
      )
}