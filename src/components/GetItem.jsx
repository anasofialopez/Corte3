import React from 'react'

export const GetItem = ({title, url}) => {
  return (
    <div className='Card'>
        <img src={url} alt={title}/>
    </div>
  )
}
