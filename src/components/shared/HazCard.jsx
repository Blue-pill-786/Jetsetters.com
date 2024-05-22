import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { HazImg1 } from '../../assets/packages-img';

const HazCard = ({ img, PackageType, star = 0, historical = false, zamWater = false,handler }) => {
    return (
        <div className='w-[350px] md:h-[280px] max-w-full md:w-full flex flex-col md:flex-row items-center rounded-t-[10px] md:rounded-[15px] md:shadow-none shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
            <img
                src={img}
                alt={PackageType}
                loading='lazy'
                className=' w-full  h-[300px] md:h-full rounded-t-[10px] md:rounded-[15px_0px_0px_15px] bg-center object-center object-cover md:object-fill'
            />
            <div className='py-2 border-[#10439F] bg-[#fff] border-[2px] px-4 md:px-8 border-t-0 md:border-none w-full h-full md:rounded-[0px_15px_15px_0px]'>
                <h3 className='text-[30px] md:text-3xl font-extrabold font-heading text-[#10439F] mb-2'>{PackageType}</h3>
                <div className='flex gap-x-2'>
                    <span className='text-base md:text-xl font-semibold'>Hotel: </span>
                    <p className='flex gap-x-[1px] mt-[2px]'>
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
                <div>
                    <span className='text-base md:text-xl font-semibold'> Transportation: </span>
                    <span className='text-base md:text-xl font-normal text-[#10439F]'>Jeddah - Mecca - Madina - Jeddah</span>
                </div>
                <div >
                    <span className='text-base md:text-xl font-semibold'>Meals: </span>
                    <span className='text-base md:text-xl font-normal text-[#10439F]'>Included</span>
                </div >
                {historical && (<div>
                    <span className='text-base md:text-xl font-semibold'>Tour of Historical sites: </span>
                    <span className='text-base md:text-xl font-normal text-[#10439F]'>Included</span>
                </div>)}
                {zamWater && (<div >
                    <span className='text-base md:text-xl font-semibold'>10L Zam-zam Water: </span>
                    <span className='text-base md:text-xl font-normal text-[#10439F]'>Included</span>
                </div>)}

                <div className={`w-full flex justify-end px-2 mt-5`}>
                    <button
                        onClick={handler}
                        className='px-4 py-1 text-lg font-medium bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px] text-[#fff] cursor-pointer'>
                        Book now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HazCard