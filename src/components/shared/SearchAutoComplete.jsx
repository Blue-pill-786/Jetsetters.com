import React from 'react'
import { TiLocation } from "react-icons/ti";

const SearchAutoComplete = ({ searchList, name, handler }) => {
    const clickHanlder = (data) => {
        handler((prev) => ({ ...prev, [name]: data.name }));
    }

    return (
        <div
            className='w-[calc(100%-10%)] absolute bg-white rounded-lg p-2 top-[60%] sm:translate-x-3 translate-x-2 translate-y-[40%] 
                        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col gap-1 z-[1000]'
        >
            {
                searchList.map((data, index) => (
                    <div
                        key={index}
                        className='border border-neutral-300 px-3 py-[2px] rounded-lg hover:border-[#10439F] cursor-pointer hover:shadow-md'
                        onClick={() => clickHanlder(data)}
                    >
                        <p className='text-base text-neutral-600'>{data.name}</p>
                        <p className='text-[10px] text-neutral-400 -mt-1 flex gap-1'>
                            <TiLocation
                                className='text-neutral-500 mt-[1px]'
                            />
                            <span>{data.description}</span>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default SearchAutoComplete