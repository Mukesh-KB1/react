import React from 'react'
import { useParams } from 'react-router'

function User() {
  const { user } = useParams();
  return (
    <div className='text-3xl bg-gray-600 text-white text-center p-4'>User : {user}</div>
  )
}

export default User