import React from 'react'

export default function DisplayImages(props) {
  
  return (
    <div>
      <h1>{props.bookTitle}</h1>
      <img src={props.bookImage}/>
      <p>{props.bookWriter}</p>
    </div>
  )
}
