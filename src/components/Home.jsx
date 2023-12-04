import React from 'react'
import Cards from './Cards'

function Home() {
    const dets = [
        {img:"https://cdn.weartesters.com/wp-content/uploads/2018/10/nike-lebron-soldier-12-team.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Black)",},
        {img:"https://cdn.fashdirect.com/webadmin/items/website/3827034/image_2_404460025500_1.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Blue)",},
        {img:"https://cdn.weartesters.com/wp-content/uploads/2018/10/nike-lebron-soldier-12-team-colorways-red.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Red)",},
        {img:"https://cdn.weartesters.com/wp-content/uploads/2018/10/nike-lebron-soldier-12-team.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Black)",},
        {img:"https://cdn.fashdirect.com/webadmin/items/website/3827034/image_2_404460025500_1.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Blue)",},
        {img:"https://cdn.weartesters.com/wp-content/uploads/2018/10/nike-lebron-soldier-12-team-colorways-red.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Red)",},
    ]
  return (
    <div className='flex justify-between items-center ps-[80px] calc-height'>
        <div className='w-[30vw] pe-20'>
            <p className='text-sm text-gray-600 font-semibold'>Exlore the Limited Edition</p>
            <p className='uppercase text-[3rem] font-bold leading-[3.5rem] py-4'>Nike Limited Edition</p>
            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates accusantium eum reprehenderit voluptate error natus magni ut asperiores accusamus voluptatem harum, eaque omnis suscipit quo sapiente minima ea. Assumenda deleniti, reiciendis minus aliquid ab ipsam necessitatibus autem veniam et voluptatum esse fuga consequuntur facere soluta magnam sunt nam consequatur voluptatem?</p>
            <button className='bg-[#000612] text-white px-10 py-2 mt-6 rounded-3xl rounded-tl-none font-semibold'>Show Now</button>
        </div>
        <div id='card' className='w-[60vw] h-[90%] whitespace-nowrap overflow-x-auto overflow-y-hidden'>
            {dets.map((data)=>(
                <Cards
                img={data.img}
                text1={data.text1}
                text2={data.text2}
                />
            ))}
        </div>
    </div>
  )
}

export default Home