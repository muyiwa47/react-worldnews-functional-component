import React from 'react';
import './newsSources.css';
import { Link } from 'react-router-dom';

export default function newsSources({ data, filter }) {
  let changeCase = (str) => {
      return str.toUpperCase()
  }

  function getData(){
    let store = []
      if (filter.length === 0){
        store = data.filter(item => item.category === "general")
      } else {
        store = data.filter(item => item.category === filter)
      }
    return store
  }

  return (
    getData().map((source) => {
      return (
        <div className="sources" key={source.id}>
        <section></section><img src={source.urlToImage} alt="" />
        <div className="source_name"><strong>{source.name}</strong></div>
        <div className="source_desc">{source.description}</div>
        <div className="source_category">{changeCase((source.category))} | {changeCase(source.language)}</div>
        <Link to={source.id}>{source.id}</Link>
      </div>
      )
    }))
}