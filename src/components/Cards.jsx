import React from 'react'

function Cards({
  img,
  text1,
  text2
}) {
  return (
    <>
    <div className='relative w-[250px] md:w-[300px] h-full bg-white rounded-lg inline-block me-4 overflow-hidden' style={{boxShadow:"1px 1px 4px black"}}>
        <img src={img} alt="" className='absolute h-[50%] w-full object-cover top-[7%]'/>
        <h4 className='absolute bottom-[10%] right-0 bg-black text-white py-[12px] px-[24px] rounded-lg rounded-br-none font-semibold text-sm'>{text1}</h4>
        <h5 className='absolute bottom-0 right-0 bg-[#D0D4D5] py-[12px] px-[30px] rounded-lg rounded-tr-none text-sm'>{text2}</h5>
    </div>
    </>
  )
}

export default Cards