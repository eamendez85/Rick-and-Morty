import React from 'react'

export const Card = ({image, name, status, species, gender}) => {
  return (
    <div className="card-container">
        <div className="img-container">
            <img src={image} className="img-card" />
        </div>
        <div className="info-container">
          <h2 className="name-card">{name}</h2>
          <div className="p-container">
            <p className="status-card">Status: <span>{status}</span></p>
            <p className="species-card">Species: <span>{species}</span></p>
            <p className="gender-card">Gender: <span>{gender}</span></p>
          </div>
        </div>
    </div>
  )
}
