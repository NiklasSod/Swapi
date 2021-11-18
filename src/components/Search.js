import React, { useState } from 'react'
import axios from 'axios';

function Search({ setItems }) {

  const [searchTerm, setSearchTerm] = useState('');

  const search = async () => {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`);
    const data = response.data.results;
    setItems(data);
  };

  return (
    <div className="form-outline col-md-7 mx-auto d-flex justify-content-center mb-5">
      <input className="form-control"
        type="text"
        placeholder="Search"
        onChange={e => {setSearchTerm(e.target.value)}}
      />
      <button className="btn btn-primary btn-sm shadow-none" onClick={search} >Search!</button>
    </div>
  );
};

export default Search
