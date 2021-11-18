import React from 'react'
import { Accordion } from 'react-bootstrap';
import './CharacterList.css';

function characterList({ item }) {
  return (
    // <div className="accordion col-md-7 mx-auto pb-2" id="accordionExample">
    //   <div className="accordion-item">
    //     <h2 className="accordion-header" id="headingOne">
    //       <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    //         {item.name}
    //       </button>
    //     </h2>
    //     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    //       <div className="accordion-body">
    //         <p>BODY CONTENT</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Accordion className="col-md-7 mx-auto pb-2">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{item.name}</Accordion.Header>
        <Accordion.Body>
        {"Height: " + item.height + " "}
        {item.mass + " "}
        {item.hair_color + " "}
        {item.skin_color + " "}
        {item.eye_color + " "}
        {item.birth_year + " "}
        {item.gender + " "}
        <p className="starsInMovies">
          Starred in movie: {item.films.map(
            (movie) => `${movie.replace(/\D/g,'')} `)}
        </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default characterList
