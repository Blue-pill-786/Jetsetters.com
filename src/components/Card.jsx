import React from 'react'


const Card = ({data, styles}) => {
    return (
        <div className='m-2'>
            <div className='rounded-xl'>
                <img
                    src={data.src}
                    alt={data.title}
                    className={`${styles} rounded-xl object-cover`}
                />
            </div>
            <div className='mt-3'>
                <p className='text-sm font-bold'>{data.title}</p>
                {data.content && <p className='text-sm text-neutral-500'>{data.content}</p>}
            </div>
        </div>
    )
}

export default Card
