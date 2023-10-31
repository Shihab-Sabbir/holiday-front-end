import React from 'react'
import HeaderNavigation from './HeaderNavigation'
import HeaderTravelInfo from './HeaderTravelInfo'
import HeaderSearch from './HeaderSearch'

export default function Header() {
  return (
    <div>
        <HeaderTravelInfo/>
        <HeaderNavigation/>
        <HeaderSearch/>
    </div>
  )
}
