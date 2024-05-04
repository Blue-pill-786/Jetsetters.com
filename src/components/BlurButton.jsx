import React from 'react'

const BlurButton = ({title,children,handler,style}) => {
    return (
        <button 
            className={`px-4 py-2 hover:bg-[#ffffff1c] rounded-[5px] font-medium transition-colors duration-200 ${style}`}
            onClick={handler}>
            {children ? children : title}
        </button>
    )
}

export default BlurButton