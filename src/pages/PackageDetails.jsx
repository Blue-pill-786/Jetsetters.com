import React from 'react'
import { useLocation } from 'react-router-dom'
import WrapperLayout from '../components/Layouts/WrapperLayout';
import { TbLoader3 } from "react-icons/tb";

const PackageDetails = () => {
    const location = useLocation();
    const packageName = location.pathname.split('/');
    return (
        <div className='capitalize text-5xl h-[calc(100vh-150px)] text-heading-text w-screen flex flex-col gap-y-5 items-center justify-center p-4'>
            <p className='text-center'>Kashmir {packageName[packageName.length - 1].split('-')[0]} Package Details Under Maintance</p>
            <TbLoader3 className='animate-spin text-[70px]' />
        </div>
    )
}

export default WrapperLayout()(PackageDetails)