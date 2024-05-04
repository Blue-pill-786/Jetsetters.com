import React from 'react'

const Button = ({text,bg,title,style}) => {
    return (
        <button className={`${text} ${bg} font-medium px-2 py-2 text-center cursor-pointer border border-[#2155cdc2] 
                            rounded-[5px] text-sm ${style}`}
        >
            {title}
        </button>
    )
}

export default Button