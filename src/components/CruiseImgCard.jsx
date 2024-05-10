import React, { useState } from 'react'
import PopupModal from './shared/PopupModal';

const CruiseImgCard = ({ data }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='relative w-full h-[400px] rounded-[20px] overflow-hidden border-[8px] border-[#fff] group'>
            <img
                src={data.img}
                alt="card"
                className='w-full h-full object-cover rounded-[15px]'
            />
            <div className='absolute flex flex-col justify-center w-full h-full top-0 -right-[100%] text-[#fff] p-[30px] 
                            bg-[#1f3d4738] backdrop-blur-[5px] rounded-[15px] group-hover:right-0 transition-all duration-[1.5s]'
            >
                <h1 className='uppercase text-[50px] font-medium'>{data.title}</h1>
                <p className='capitalize text-[14px] font-light'>{data.description}</p>
                <button className='w-[120px] text-[#1f3d47] bg-[#8fabba] rounded-[5px] capitalize border-none outline-none 
                                font-medium cursor-pointer'
                    onClick={() => setOpen(true)}
                >
                    Book now
                </button>
            </div>

            {
                open && <PopupModal
                    title={"Cruise"}
                    open={open}
                    setOpen={setOpen}
                />
            }
        </div>
    )
}

export default CruiseImgCard