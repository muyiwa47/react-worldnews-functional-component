import React,  {useEffect, useState} from 'react';
import axios from "axios";
import defaultImg from "./image-not-found.png"
import './newsDetails.css';

export default function NewsDetails(props) {
    const [data, setData] = useState([]);
    const apiKey = '49e68def73af41b1927f24680bccc357';
    function checkImage(url){
      debugger;
        if ((url === null) || (url === "null") || (url === "")){
          return defaultImg
           } else {
          return url
        }
    }
    useEffect(() => {
        axios
          .get(`https://newsapi.org/v2/top-headlines?sources=${props.id}&apiKey=${apiKey}`)
          .then(result => setData(result.data.articles));
      }, [props.id]);
  return (
    <div className="newsDetails">
      { data.map((item) => {
          return (
              <div className="newsDetails_item" key={item.publishedAt}>
                  <div className="imgPlaceholder">
                    <img src={checkImage(item.urlToImage)} alt="" />
                  </div>
                  <div className="content">
                    <div className="newsDetails_title">{ item.title }</div>
                    <div>{ item.description }</div>
                    <div>{ item.content }</div>
                    <div className="newsDetails_url"><strong><a href={ item.url }>{ item.url }</a></strong></div>
                  </div>
             </div>
          )
      }) }
    </div>
  );
}
