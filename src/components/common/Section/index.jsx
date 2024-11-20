import React from 'react'

export default function Section({children}) {
  return (
      <div className='h-screen bg-gray-800 flex flex-col items-center justify-center m-2 p-4'>{children} </div>
  )
}
