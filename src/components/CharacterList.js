import React from 'react'
import './CharacterList.css';

function characterList({ item }) {
  return (
    <div className="accordion col-md-7 mx-auto" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            {item.name}
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>BODY CONTENT</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default characterList
