import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()       // at the time of routing we give the name userid so it will use same name here.
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User
