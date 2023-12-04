import React from 'react'
import 'remixicon/fonts/remixicon.css'
import logo from '../../public/icons8-nike-50.png'

function NavBar() {
  return (
    <div className='relative md:h-[110px] w-full flex justify-between items-center px-[20px] md:px-[80px] mt-4 md:mt-0'>
        <div className='flex items-center'>
            <img src={logo} alt='nikeLogo' className='h-[45px] md:h-[70px] object-cover me-[60px] lg:me-[170px]'/>
            <ul id='nav' className='flex justify-evenly w-[40vw] font-semibold'>
                <li className='uppercase me-[60px] text-[14px] font-semibold cursor-pointer'>
                    Home
                    <div className='h-[3px] bg-black w-[30px] rounded-lg'></div>    
                </li>
                <li className='uppercase me-[60px] text-[14px] font-semibold cursor-pointer'>Men</li>
                <li className='uppercase me-[60px] text-[14px] font-semibold cursor-pointer'>Women</li>
                <li className='uppercase me-[60px] text-[14px] font-semibold cursor-pointer'>Collection</li>
                <li className='uppercase me-[60px] text-[14px] font-semibold cursor-pointer'>Contact</li>
            </ul>
        </div>
        <div className=''>
            <i className="ri-search-line me-[30px] lg:me-[60px] text-lg md:text-[20px] font-normal cursor-pointer"></i>
            <i className="ri-shopping-cart-line me-[30px] lg:me-[60px] text-lg md:text-[20px] font-normal cursor-pointer"> 0</i>
            <i className="ri-menu-3-line me-[30px] lg:me-[60px] text-lg md:text-[20px] font-normal cursor-pointer"></i>
        </div>
    </div>
  )
}

export default NavBar