import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 shrink-0 overflow-hidden relative rounded-4xl'>
      <img src={props.img} className='h-full w-full object-cover'></img>
      <RightCardContent intro={props.intro} number={props.index} tag={props.tag} />
    </div>
  )
}

export default RightCard
