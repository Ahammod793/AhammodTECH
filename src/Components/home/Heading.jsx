import React from 'react'

export default function Heading({title, subTitle=''}) {
  return (
    <div className='mx-[7%] pb-16 text-center'>
      <h1 className='font-bold text-[40px] text-[#0B0B0B]'>{title}</h1>
      <p className='font-normal text-[16px] text-white'>{subTitle}</p>
    </div>
  )
}
