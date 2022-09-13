import React from 'react'
import star from '../images/star.png'

function Card(props) {
  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
        console.log(badgeText)
    }
    console.log(props)
  return (
    <div className='card-container'>
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.coverImg} className='card-img' />
      <div className='card-status'>
        <img src={star} className='card-star' />
        <span>{props.stats.rating}</span>
        <span className='gray'>({props.stats.reviewCount}) .</span>
        <span className='gray'>{props.location}</span>
        <p>{props.title}</p>
        <p><b>From ${props.price} </b>/ person</p>
      </div>
    </div>
  )
}

export default Card