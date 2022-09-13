import React from 'react'

function Card(props) {
  return (
    <div className='inner-card'>
        <img src={props.imageUrl} />
        <section>
            <small>{props.location}</small>
            <a href={props.googleMapsUrl} className='google-map' target='blank'>View on Google Maps</a>
            <h1>{props.title}</h1>
            <h5 className='dates'>{props.startDate} - {props.endDate}</h5>
            <p>{props.description}</p>
        </section>
    </div>
  )
}

export default Card