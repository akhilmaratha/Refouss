import React from 'react'
import Button from './Button'

function Product({elem,mover,count}) {
   
  return (
    <div className='w-full py-20 h-[23rem] text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-lg mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-medium'>{elem.title}</h1>
            <div className="dets w-1/3  ">
                <p className='mb-10'>{elem.description}</p>
                <div className="flex items-center gap-5">
                {elem.live && <Button/>}
                {elem.case && <Button title='Case Study'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
