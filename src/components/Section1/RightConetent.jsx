import React from 'react'
import RightCard from './RightCard'

const RightConetent = (props) => {
  // Duplicate the users array multiple times for infinite scroll
  const duplicatedUsers = [...props.users, ...props.users, ...props.users, ...props.users];
  
  return (
    <div className='h-full w-2/3 overflow-hidden relative'>
      <div className='h-full flex gap-10 p-3 animate-auto-scroll'>
        {duplicatedUsers.map(function(elem, index){
          return <RightCard key={`${elem.tag}-${index}`} img={elem.img} intro={elem.intro} tag={elem.tag} index={(index % props.users.length) + 1}/>
        })}
      </div>
    </div>
  )
}

export default RightConetent
