import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";

const HeaderBanner = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation()
    return (
        <div className='bg-main-bg h-[60px] w-full p-2 flex gap-x-3 lg:justify-evenly justify-between items-center fixed shadow-2xl shadow-[#0000007d] z-[1000] top-0 left-0'>
            {pathname === "/"  ? ("") : <button
                className='relative md:p-2 p-1 rounded-full bg-gradient-to-r first:to-[#f5892a] from-[#f99f18] group'
                onClick={() => navigate(-1)}
            >
                <div className='absolute cursor-pointer text-[#fff] px-2 bg-[#1111113f] rounded-md -bottom-[80%] opacity-0 group-hover:opacity-100 -left-2 transition duration-[0.5s]'>
                    back
                </div>
                <IoMdArrowBack
                    className='sm:text-[20px] text-[#fff]'
                />
            </button>}
            <p className='text-[#dde5f1] text-[10px] lg:text-xl sm:text-base overflow-hidden font-medium'>ARC Certified Ticketing Agent for 250+ Airlines and leading Cruise Lines
                <span
                    className='cursor-pointer md:text-lg font-semibold hover:text-[#FFC100] transition ml-1'
                    onClick={() => navigate('/about')}
                >
                    (ARC # 05511704)
                </span>
            </p>
            <p className='text-sm lg:text-xl text-center text-[#fff] font-medium cursor-pointer'>
                <a href="tel:+14088999705">Call on <span className='animate-ping hover:animate-none text-[#FFC100] font-bold lg:text-4xl md:text-3xl sm:text-2xl text-lg drop-shadow-md shadow-[#c97156]'>+14088999705</span></a>
            </p>
        </div>
    )
}

export default HeaderBanner