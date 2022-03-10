import React from 'react'

export const Input = ({type, id, event}) => {
  return (
    <div id='input-container'>
        <input type={type} id={id} onKeyDown={event}/>
    </div>
  )
}
