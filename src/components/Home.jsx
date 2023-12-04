import React from 'react'
import Cards from './Cards'

function Home() {
    // const dets = [
    //     {img:"https://cdn.weartesters.com/wp-content/uploads/2018/10/nike-lebron-soldier-12-team.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Black)",},
    //     {img:"https://cdn.fashdirect.com/webadmin/items/website/3827034/image_2_404460025500_1.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Blue)",},
    //     {img:"https://cdn.weartesters.com/wp-content/uploads/2018/10/nike-lebron-soldier-12-team-colorways-red.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Red)",},
    //     {img:"https://cdn.weartesters.com/wp-content/uploads/2018/10/nike-lebron-soldier-12-team.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Black)",},
    //     {img:"https://cdn.fashdirect.com/webadmin/items/website/3827034/image_2_404460025500_1.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Blue)",},
    //     {img:"https://cdn.weartesters.com/wp-content/uploads/2018/10/nike-lebron-soldier-12-team-colorways-red.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Red)",},
    // ]
    const dets = [
        {img:"https://static.nike.com/a/images/t_default/e8cbcfc4-ce2e-42d7-a7a2-86bf3e1dd506/lebron-witness-7-basketball-shoes-lLTcQM.png", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Black)",},
        {img:"https://cdn.fashdirect.com/webadmin/items/website/3827034/image_2_404460025500_1.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Blue)",},
        {img:"https://static.nike.com/a/images/t_default/b3506e37-a78a-4283-a475-00c0bfc9c1a6/lebron-witness-7-older-basketball-shoes-bV8fWg.png",text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Blue)",},
        {img:"https://cdn.weartesters.com/wp-content/uploads/2018/10/nike-lebron-soldier-12-team-colorways-red.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Red)",},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGC-CKx2W2ctHo2k9pcNbMXM3qFe_d6cW6Q&usqp=CAU", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Red)",},
        {img:"https://cdn.weartesters.com/wp-content/uploads/2018/10/nike-lebron-soldier-12-team.jpg", text1:"Men's Basketball Shoe", text2:"LeBron Solider 12 (Black)",},
    ]
  return (
    <div className='relative contantHeight w-full md:flex ps-[20px] md:ps-[50px] lg:ps-[120px]'>
        <div id='left' className='md:h-full w-full md:w-[40%]'>
            <h5 className='text-xs md:text-sm font-semibold text-gray-500 mt-8 md:mt-10'>Explore the Limited Edition</h5>
            <h1 className=' text-[20px] md:text-[40px] lg:text-[60px] uppercase leading-none lg:leading-[3.5rem] my-2 md:my-4 font-semibold'>Nike Limited Edition</h1>
            <p className='text-xs md:text-sm w-[70%] leading-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur nesciunt minus sit in maxime fuga, aperiam sequi odio esse culpa laudantium itaque facilis molestias eligendi eaque? Id, quaerat doloribus!</p>
            <button className='my-2 md:my-6  bg-black text-white text-sm md:text-[16px] uppercase py-2 px-6 rounded-3xl rounded-tl-none cursor-pointer'>Shop Now</button>
        </div>
        <div id='right' className='relative h-[65%] md:h-[70%] lg:h-[95%] w-full md:w-[60%] whitespace-nowrap overflow-x-auto overflow-y-hidden pb-2 mt-4 md:mt-6 lg:mt-0'>
            {dets.map((data)=>(
                <Cards
                img={data.img}
                text1={data.text1}
                text2={data.text2}
                />
            ))}
            {/* <div className='relative w-[300px] h-full bg-white rounded-lg'>
                <img src={dets[0].img} alt="" className='absolute h-[50%] w-full object-cover top-[7%]'/>
                <h4 className='absolute bottom-[10%] right-0 bg-black text-white py-[15px] px-[30px] rounded-lg rounded-br-none font-semibold'>{dets[0].text1}</h4>
                <h5 className='absolute bottom-0 right-0 bg-[#D0D4D5] py-[15px] px-[30px] rounded-lg rounded-tr-none'>{dets[0].text2}</h5>
            </div> */}
        </div>
    </div>
  )
}

export default Home