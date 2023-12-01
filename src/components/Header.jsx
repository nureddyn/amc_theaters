import React from 'react'
import UpperHeader from './UpperHeader'
import LowerHeader from './LowerHeader'

export default function Header() {
  return (
    <header>
      <UpperHeader className='upper-header'/>
      <LowerHeader className='lower-header'/>
    </header>
  )
}
