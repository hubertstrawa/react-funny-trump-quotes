import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/quotes/Search';
import Quotes from './components/quotes/Quotes';
import Spinner from './components/layout/Spinner';
import axios from 'axios';
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const searchQuotes = async text => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/search/quote?query=${text}`
      );
      setQuotes(res.data._embedded.quotes);
      setCount(res.data.count);
      console.log(res.data._embedded.quotes);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='App'>
      <Navbar />
      <Search search={searchQuotes} />
      {loading && <Spinner />}
      <Quotes quotes={quotes} count={count} />
    </div>
  );
};

export default App;
