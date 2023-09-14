import Image from 'next/image'
import React from 'react'
import navlogo from '../Assests/image137.png'
import {HiDownload} from 'react-icons/hi'
import {AiOutlineDown} from 'react-icons/ai'

export default function Header() {
  return (
    <div className='px-20 fixed w-full bg-white'>
        <div className='flex w-full justify-between'>
            <div className='flex justify-between space-x-5'>
                <Image src={navlogo} />
                <div className='flex items-center text-xl font-semibold space-x-6'>
                    <p>All Properties<AiOutlineDown className='inline ml-1 font-bold'/></p>
                    <p>Organisation</p>
                    <p>Blog</p>
                    <p>Free Courses</p>
                </div>
            </div>
            <div className='flex items-center text-xl font-semibold'>
                <button className='border-2 border-black px-2 py-2 text-xl'><HiDownload className='inline border-2 border-black text-2xl rounded-md mr-1 -rotate-90'/>Sign In</button>
            </div>
        </div>
    </div>
  )
}
