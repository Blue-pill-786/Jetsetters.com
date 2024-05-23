import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { MdHotel, MdFlight, MdTour } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";


const HazCard = ({ img, PackageType, star = 0, historical = false, zamWater = false,price, handler }) => {
    return (
        <div className='flex flex-col md:flex-row items-center rounded-t-[10px] md:rounded-[15px] md:shadow-none shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-[#fff] group overflow-hidden'>
            <div className='haz-img md:h-[280px] lg:w-[650px] sm:w-[450px] w-[380px] max-w-full overflow-hidden md:rounded-[15px] relative'>
                <div className='absolute w-full h-full top-0 -right-[100%] text-[#fff] p-[30px] ]
                            rounded-[15px] group-hover:right-0 transition-all duration-[1s] ease-in-out backdrop-hue-rotate-30 bg-[#1c98fd0f]
                            z-[100]'>
                </div>
                <img
                    src={img}
                    alt={PackageType}
                    loading='lazy'
                    className='w-full h-[300px] md:h-full rounded-t-[10px] md:rounded-[15px] object-cover group-hover:scale-[1.05] transition-transform duration-[1s] ease-in-out z-[10]'
                />
            </div>
            <div className='py-2 border-[#10439F] bg-[#fff] border-[2px] px-4 md:px-8 border-t-0 md:border-none w-full h-full md:rounded-[0px_15px_15px_0px]'>
                <div className='flex justify-between flex-col md:h-[250px]'>
                    <div className='flex flex-col'>
                        <h3 className='text-[30px] md:text-3xl font-extrabold font-heading text-[#10439F] mb-2'>{PackageType}</h3>
                        <div>
                            <div className='flex gap-x-2'>
                                <p className='flex gap-x-2'>
                                    <MdHotel className='text-[#10439F] md:text-[20px]' />
                                    <span className='text-base md:text-xl font-semibold'>Hotel: </span>
                                </p>
                                <p className='flex gap-x-[1px] mt-[2px] md:mt-0 md:text-[20px]'>
                                    {
                                        Array(star).fill('.').map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className='text-[#FFF455]'
                                            />
                                        ))
                                    }
                                </p>
                            </div>
                            <div className='flex gap-x-2'>
                                <p className='flex gap-x-2'>
                                    <MdFlight className='text-[#10439F] md:text-[20px] rotate-45' />
                                    <span className='text-base md:text-xl font-semibold'> Transportation: </span>
                                </p>
                                <span className='text-base md:text-xl font-normal text-[#10439F] text-balance'>Jeddah - Mecca - Madina - Jeddah</span>
                            </div>
                            <div className='flex gap-x-2'>
                                <p className='flex gap-x-2'>
                                    <GiMeal className='text-[#10439F] md:text-[20px]' />
                                    <span className='text-base md:text-xl font-semibold'>Meals: </span>
                                </p>
                                <span className='text-base md:text-xl font-normal text-[#10439F]'>Included</span>
                            </div >
                            {historical && (<div className='flex gap-x-2'>
                                <p className='flex gap-x-2'>
                                    <MdTour className='text-[#10439F] md:text-[20px]' />
                                    <span className='text-base md:text-xl font-semibold text-nowrap'>Tour of Historical sites: </span>
                                </p>
                                <span className='text-base md:text-xl font-normal text-[#10439F]'>Included</span>
                            </div>)}
                            {zamWater && (<div className='flex gap-x-2'>
                                <p className='flex gap-x-2'>
                                    <IoIosWater className='text-[#10439F] md:text-[20px]' />
                                    <span className='text-base md:text-xl font-semibold'>10L Zam-zam Water: </span>
                                </p>
                                <span className='text-base md:text-xl font-normal text-[#10439F]'>Included</span>
                            </div>)}
                        </div>
                    </div>

                    <div className={`w-full flex justify-end px-2 mt-5`}>
                        <button
                            onClick={handler}
                            className='px-4 py-1 text-lg font-medium bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px] text-[#fff] cursor-pointer'>
                            Book now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HazCard