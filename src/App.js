import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Header from './components/header/header';
import NewsSources from './components/newsSources/newsSources';
import Footer from './components/footer/footer';
import NewsDetails from './components/newsDetails/newsDetails';
import axios from "axios";
import loading from './loading.gif';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setValue] = useState(true);
  const apiKey = '49e68def73af41b1927f24680bccc357';
  
  useEffect(() => {
    axios
      .get(`http://newsapi.org/v2/sources?apiKey=${apiKey}`)
      .then(result => {
        setData(result.data.sources)
        setValue(false)
      });
  }, []);

  return (
    <div className="App">
      { (isLoading === true) ? <img src={loading} alt="" className="preloader" /> : null}
        <Router>
        <Switch>
          <Route path="/:id" children={<Child />} />
          <Route exact path="/">
           <Header id="Sources" location="home" />
           <NewsSources data={data} />
          </Route>
        </Switch>
        </Router>
        { (isLoading === false) ? <Footer /> : null}
    </div>
  );
}

function Child() {
  let { id } = useParams();
  return (
    <div>
       <Header id={id} />
       <NewsDetails id={id} />
    </div>
  );
}

export default App;