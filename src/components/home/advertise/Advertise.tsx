import React from 'react'
import ExclusiveAdvertise from './ExclusiveAdvertise'
import NavigationBasedAdvertise from './NavigationBasedAdvertise'

export default function Advertise() {
  return (
    <div className='my-[20px]'>
        <ExclusiveAdvertise/>
        <NavigationBasedAdvertise/>
    </div>
  )
}
