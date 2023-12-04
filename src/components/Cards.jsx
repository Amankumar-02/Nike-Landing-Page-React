import React from 'react'

function Cards({
    img,
    text1,
    text2
}) {
  return (
    <div className='bg-white h-[95%] w-[300px] rounded-xl overflow-hidden inline-block me-4' style={{boxShadow:"1px 1px 4px black"}}>
        <div className='h-[80%] w-[100%] '>
            <img className='h-[100%] w-[100%] object-cover' src={img} alt="" />
        </div>
        <div className='flex items-end flex-col mt-4'>
            <p className='bg-[#000612] text-white py-2 px-4 rounded-lg rounded-br-none text-sm'>{text1}</p>
            <p className='bg-gray-300 py-2 px-6 rounded-lg rounded-tr-none text-sm font-semibold'>{text2}</p>
        </div>
    </div>
  )
}

export default Cards