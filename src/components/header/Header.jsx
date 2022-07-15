import React from 'react'
import logo from '../../assets/images/logo.svg'
const Header = () => {
  return (
    <div className='px-12 mx-auto flex justify-between items-center py-2 border-b border-[#b9b0e4]'>
      <div className='flex items-center'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className='flex items-center'>
          <li className='ml-8 text-base text-[#654a9b]'><a href="/">Overview</a></li>
          <li className='ml-8 text-base text-[#b9b0e4]'><a href="/">Specs</a></li>
          <li className='ml-8 text-base text-[#b9b0e4]'><a href="/">FAQs</a></li>
        </ul>
      </div>
      <div className='flex items-center'>
          <h5 className='mr-6'>Order for $249</h5>
          <button className='bg-[#654a9b] text-white px-6 py-3 font-bold rounded-md'>Pre Order</button>
      </div>
    </div>
  )
}

export default Header
