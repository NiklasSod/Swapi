import React from 'react'
import './CharacterList.css';

function characterList({ item }) {
  return (
    <div className="card">
      {item.name}
    </div>
  )
}

export default characterList
