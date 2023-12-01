import React from 'react'

export default function LowerHeader(props) {
  return (
    <div className={props.className}>
      <div className='location-logo'><img src="https://www.citypng.com/public/uploads/small/116370792706zuor7zucuagoaskju6ko2khbw9ojfmgzvck5pdzm3am55m2xmvkn6dyjw6rsezybhambly7c9j21zaec8yewhthg2fcbrjwnprb.png" alt="location-img"/></div>
      <p className='locations'>Find a Theater Near You</p>
      <div className='separator s2'></div>
      <p className='p-header ph2'>Merchandise</p>
      <p className='p-header ph2'>Gift Cards</p>
      <p className='p-header ph2'>Offers</p>
      <p className='p-header ph2'>Discounts</p>
      <p className='p-header ph2'>AMC Entertainment Visa Card</p>
      <p className='p-header ph2'>On Demand</p>
    </div>
  )
}
