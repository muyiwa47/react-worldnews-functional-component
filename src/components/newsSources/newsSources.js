import React from 'react';
import './newsSources.css';

export default function newsSources({ data }) {
let changeCase = (str) => {
    return str.toUpperCase()
}
  return (
    data.map((source) => {
        return (
            <div className="sources" key={source.id}>
              <section></section><img src={source.urlToImage} alt="" />
              <div className="source_name"><strong>{source.name}</strong></div>
              <div className="source_desc">{source.description}</div>
              <div className="source_category">{changeCase((source.category))} | {changeCase(source.language)}</div>
              <a href={source.id} className="source_link">{source.id}</a>
            </div>
        )
    })
  );
}