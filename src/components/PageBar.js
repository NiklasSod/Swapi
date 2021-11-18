import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function PageBar({ setItems }) {

  const handlePageClick = (data) => {
    const page = data.selected + 1;
    fetchItems(page);
  };

  const fetchItems = async (currentPage) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
      const data = response.data.results;
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ReactPaginate 
        previousLabel={'prev'} 
        marginPagesDisplayed={5}
        pageCount={9} 
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        onPageChange={handlePageClick} />
    </div>
  );
};

export default PageBar