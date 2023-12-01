import React from 'react'

export default function Review() {
  return (
    <div className='review'>
      <div className='review-left'>
        <img className='review-img' src={require('../review.png')} alt="" />
      </div>
      <div className='review-right'>
        <h2>Witness the Rise</h2>
        <p className='p-review'>The iconic French emperor embarks on a relentless, action-filled conquest to power, told through the lens of a volatile relationship. See Joaquin Phoenix in Ridley Scott's action epic NAPOLEON, now showing.</p>
        <div className='button-container'>
          <div className='movie-button button-review-1'>Get Tickets</div>
          <div className='movie-button button-review-2'>Read More</div>
        </div>
      </div>
    </div>
  )
}
