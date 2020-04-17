import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Header from './components/header/header';
import NewsSources from './components/newsSources/newsSources';
import Footer from './components/footer/footer';
import NewsDetails from './components/newsDetails/newsDetails';
import axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const apiKey = '49e68def73af41b1927f24680bccc357';
  useEffect(() => {
    axios
      .get(`http://newsapi.org/v2/sources?apiKey=${apiKey}`)
      .then(result => setData(result.data.sources));
  }, []);

  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/:id" children={<Child />} />
          <Route exact path="/">
           <Header id="Sources" location="home" />
           <NewsSources data={data} />
          </Route>
        </Switch>
        </Router>
        <Footer />
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