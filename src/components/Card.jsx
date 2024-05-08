import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';

const Card = ({ data }) => {
    return (
        <div className='relative flex flex-col max-w-[680px] w-[560px] sm:h-[250px] rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden group'>
            <img
                src={data.img}
                alt={data.title}
                className='rounded-xl relative h-full w-full object-cover z-[0] group-hover:scale-[1.1] transition-transform duration-300'
            />
            <div className='absolute p-4 flex w-full bottom-0 justify-between z-[100] bg-gradient-to-t to-[#ffffff07] via-[#00000098] from-[#000000dc] rounded-b-xl'>
                <div className='flex flex-col gap-y-1'>
                    <h5 className='sm:text-3xl text-base font-semibold text-[#ffff]'>{data.title}</h5>
                    <p className='sm:text-xs text-[10px] font-normal md:w-11/12 overflow-hidden'>{data.description}</p>
                </div>
                <span>
                    <a
                        href={data.mapLink}
                        target="_blank"
                    >
                        <FaLocationDot
                            className='cursor-pointer text-neutral-50 hover:text-blue-400 transition duration-300 hover:scale-110'
                            size={25}
                        />
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Card