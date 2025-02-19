import React from 'react'

function HeaderItem({name, Icon}) {  
  return (
    <div className='text-white flex gap-3 items-center text-[19px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3'>
        <Icon/>
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem