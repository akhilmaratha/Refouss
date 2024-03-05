import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title="Get Started"}) {
  return (
    <div className='min-w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
      <span className='text-sm font-medium'>{title}</span>
      <BsArrowReturnRight />
    </div>
  )
}

export default Button