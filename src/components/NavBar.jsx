import React from 'react'
import 'remixicon/fonts/remixicon.css'
import logo from '../../public/icons8-nike-50.png'

function NavBar() {
  return (
    <div className='flex justify-between items-center px-[80px]'>
        <div>
            <img src={logo}/>
        </div>
        <div className='w-[50vw]'>
            <ul className='flex justify-evenly w-[40vw] font-semibold'>
                <li className='uppercase ps-2'>
                    Home
                    <div className='h-[3px] bg-black w-[30px] rounded-lg'></div>    
                </li>
                <li className='uppercase ps-2'>Men</li>
                <li className='uppercase ps-2'>Women</li>
                <li className='uppercase ps-2'>Collection</li>
                <li className='uppercase ps-2'>Contact</li>
            </ul>
        </div>
        <div className='w-[20vw] flex justify-around items-center'>
            <i class="ri-search-line text-lg"></i>
            <i class="ri-shopping-cart-line text-lg"> 0</i>
            <i class="ri-menu-3-line text-lg"></i>
        </div>
    </div>
  )
}

export default NavBar