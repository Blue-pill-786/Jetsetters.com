import React from 'react'
import { useLocation } from 'react-router-dom'

const HeaderBanner = () => {
    const navigate = useLocation();
    return (
        <div className='bg-main-bg h-[60px] w-full p-2 flex gap-x-3 lg:justify-evenly justify-between items-center fixed shadow-2xl shadow-[#0000007d] z-[1000] top-0 left-0'>
            <p className='text-[#dde5f1] text-[10px] lg:text-xl sm:text-base overflow-hidden font-medium'>ARC Certified Ticketing Agent for 250+ Airlines and leading Cruise Lines
                <span className='cursor-pointer md:text-lg font-semibold hover:text-[#e77240] transition' onClick={() => navigate('/about')}> (ARC # 05511704)</span>
            </p>
            <p className='text-sm lg:text-xl text-center text-[#fff] font-medium cursor-pointer'>
                <a href="tel:+14088999705">Call on <span className='animate-ping hover:animate-none text-[#e77240] font-bold lg:text-4xl md:text-3xl sm:text-2xl text-lg drop-shadow-md shadow-[#000]'>+14088999705</span></a>
            </p>
        </div>
    )
}

export default HeaderBanner