import Image from 'next/image'
import React from 'react'
import Marquephoto from '../Assests/Marquephoto.png'

export default function Marque() {
  return (
    <div className='px-20'>
        <div className='p-4 rounded-xl border-[3px] border-black'>
            <marquee className='py-2 flex border flex-row gap-2' direction='right' >
              <div className='flex w-[80vw] justify-between'>
                <Image src={Marquephoto} className='border-2 border-red-900'/>
                <Image src={Marquephoto} className='border-2 border-red-900'/>
                <Image src={Marquephoto} className='border-2 border-red-900'/>
                <Image src={Marquephoto} className='border-2 border-red-900'/>
              </div>
            </marquee>
        </div>
    </div>
  )
}
