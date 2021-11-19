import React from 'react'
import { Accordion } from 'react-bootstrap';
import './CharacterList.css';

function characterList({ item }) {
  return (

    <Accordion className="pb-2">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{item.name}</Accordion.Header>
        <Accordion.Body className="info-body">
          <div className="character-information-1">
            <p>{"Height: " + item.height}</p>
            <p>{"Mass: " + item.mass}</p>
            <p>{"Hair color: " + item.hair_color}</p>
            <p>{"Skin color: " + item.skin_color}</p>
            <p>{"Eye color: " + item.eye_color}</p>
          </div>
          <div className="character-information-2">
            <p>Birth year: </p>
            <p>{item.birth_year}</p>
            <p>{"Gender: " + item.gender}</p>
          </div>
          <div className="character-information-3">
            <p>
              In movie: {item.films.map(
                (movie) => `${movie.replace(/\D/g,'')} `)}
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default characterList
