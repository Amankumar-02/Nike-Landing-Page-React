import React from 'react'
import 'remixicon/fonts/remixicon.css'
import logo from '../../public/icons8-nike-50.png'

function NavBar() {
  return (
    <div className='relative md:h-[110px] w-full flex justify-between items-center px-[20px] md:px-[80px] mt-4 md:mt-0'>
        <div className='flex items-center'>
            <img src={logo} alt='nikeLogo' className='h-[35px] object-cover me-[60px] lg:me-[170px]'/>
            <ul id='nav' className='flex justify-evenly w-[40vw] font-semibold'>
                <li className='uppercase me-[60px] text-[14px] font-semibold'>
                    Home
                    <div className='h-[3px] bg-black w-[30px] rounded-lg'></div>    
                </li>
                <li className='uppercase me-[60px] text-[14px] font-semibold'>Men</li>
                <li className='uppercase me-[60px] text-[14px] font-semibold'>Women</li>
                <li className='uppercase me-[60px] text-[14px] font-semibold'>Collection</li>
                <li className='uppercase me-[60px] text-[14px] font-semibold'>Contact</li>
            </ul>
        </div>
        <div className=''>
            <i class="ri-search-line me-[30px] lg:me-[60px] text-lg md:text-[20px] font-normal"></i>
            <i class="ri-shopping-cart-line me-[30px] lg:me-[60px] text-lg md:text-[20px] font-normal"> 0</i>
            <i class="ri-menu-3-line me-[30px] lg:me-[60px] text-lg md:text-[20px] font-normal"></i>
        </div>
    </div>
  )
}

export default NavBar