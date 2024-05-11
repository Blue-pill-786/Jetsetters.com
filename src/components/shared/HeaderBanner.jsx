import React from 'react'

const HeaderBanner = () => {
    return (
        <div className='bg-main-bg h-12 w-full p-2 flex justify-between items-center fixed shadow-2xl shadow-[#0000007d] z-[1000] top-0 left-0'>
            <p className='text-[#d5dde8] text-xs sm:text-lg overflow-hidden font-medium'>ARC Certified Ticketing Agent for 250+ Airlines and leading Cruise Lines
                <span className='cursor-pointer font-semibold hover:text-white transition'>(ARC # 05511704)</span>
            </p>
            <p className='text-xs sm:text-lg lg:text-2xl text-[#fff] font-medium cursor-pointer'>
                <a href="tel:+14088999705">Call on : <span className='animate-ping hover:animate-none text-heading-text font-bold'>+14088999705</span></a>
            </p>
        </div>
    )
}

export default HeaderBanner