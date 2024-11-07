import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const Error= useRouteError()
    console.error(Error)
  return (
    <div>
        <div className='text-center flex flex-col items-center pt-20'> 
            <h1 className='font-bold text-2xl text-black'>{Error.status}</h1><br />
            <h1 className='py-6 font-bold text-3xl text-black'>{Error.statusText}</h1>
            <h3>{Error.data}</h3>
        </div>
    </div>
  )
}
