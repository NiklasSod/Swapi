import React from 'react'
import axios from 'axios';

function Search({ setItems }) {

  const search = async (searchTerm) => {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`);
    const data = response.data.results;
    setItems(data);
  };

  return (
    <div className="form-outline col-md-3 mx-auto d-flex justify-content-center mb-5">
      <input className="form-control"
        type="text"
        placeholder="Search character here"
        onChange={e => {search(e.target.value)}}
      />
    </div>
  );
};

export default Search
