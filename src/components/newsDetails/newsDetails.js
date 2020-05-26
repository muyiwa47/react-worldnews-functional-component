import React,  {useEffect, useState} from 'react';
import axios from "axios";
import defaultImg from "./image-not-found.png"
import loading from './loading.gif';
import errImage from '../../error.jpg';
import Header from '../header/header';
import './newsDetails.css';

export default function NewsDetails(props) {
    const [data, setData] = useState([]);
    const [isLoading, setValue] = useState(true);
    let [err, setErr] = useState(false);
    const apiKey = '49e68def73af41b1927f24680bccc357';
    function checkImage(url){
        if ((url === null) || (url === "null") || (url === "")){
          return defaultImg
           } else {
          return url
        }
    }

    useEffect(() => {
        const { match: { params } } = props;
        axios
          .get(`https://newsapi.org/v2/top-headlines?sources=${params.id}&apiKey=${apiKey}`)
          .then((result) => {
            setData(result.data.articles)
            setValue(false)
          }).catch((err) => {
            setValue(false)
            setErr(true)
          });
      }, [props]);

  return (
    <div className="newsDetails">
      <Header id={props.match.params.id} />
      { (isLoading === true) ? <img src={loading} alt="" className="preloader" /> : null }
      {  (err !== true) ? data.map((item) => {
          return (
              <React.Fragment key={item.publishedAt}>
                <div className="newsDetails_item">
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
              </React.Fragment>
          )
      }) : <React.Fragment><img src={errImage} alt="" className="errImage" /> </React.Fragment>

      }
    </div>
  );
}
