import React from 'react'
import MainNews from './MainNews'
import Movies from './Movies'
import Review from './Review'

export default function Body() {
  return (
    <div className='body'>
      <MainNews />
      <Movies />
      <Review />
    </div>
  )
}
