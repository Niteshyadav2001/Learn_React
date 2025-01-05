import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { id } = useParams()
  return (
    <div
      className='p-4 text-3xl font-bold bg-orange-500 items-center justify-center flex'
    >
      user : {id} 
    </div>
  )
}

export default User