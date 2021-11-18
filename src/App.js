import { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList.js';
import axios from 'axios';
import './App.css';
import PageBar from './components/PageBar';
import Search from './components/Search.js';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        let page = 1;
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        const data = response.data.results;
        setItems(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getItems();
  }, []);

  return (
    <div className="pb-3" >
      <h1 className="header">Star Wars characters!</h1>
      <PageBar setItems={setItems} />
      <Search setItems={setItems} />
      {items.length < 1 ? <p className="loading">Loading...</p> : items.map((item) => {
        return <CharacterList key={item.name} item={item} />
      })}
    </div>
  );
};

export default App;
