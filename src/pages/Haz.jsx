import React, { useState } from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import HazCard from '../components/shared/HazCard';
import {
    HazImg1,
    HazImg2,
    HazImg4,
    HazImg7,
    HazImg5,
    HazImg6,
    HazImg8,
    HazImg3,
    Haz_Logo
} from '../assets/packages-img'
import PopupModal from '../components/shared/PopupModal';

const Haz = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    }
    return (
        <div className=''>
            <div className='haz-hero min-h-[calc(100vh-60px)] w-[100%] md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden'>
                <div className='w-full h-full flex flex-col lg:mt-[10rem] mt-[10rem] lg:ml-[10rem] md:mt-[4rem]'>
                    <h1 className='md:text-7xl text-4xl text-[#fff] font-content font-bold drop-shadow-md shadow-[#000]'>Hajj Packages 2024</h1>
                    <p className='sm:text-xl text-lg md:px-2 -mt-1 text-[#fff] font-content font-medium drop-shadow-md shadow-[#000]'>Browse our Special Hajj Packages designed to suit your budget!</p>
                </div>
            </div>

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto my-10 sm:p-0 p-4'>

                <img
                    src={Haz_Logo}
                    alt="haz"
                    className='w-[200px] mx-auto '
                />
                <div className='mb-5 mt-7 md:mb-7'>
                    <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>7 Nights Package</h1>
                    <p className='text-lg md:text-xl text-center text-[#000] font-medium'>4 nights in Mecca & 3 nights in Madina</p>
                </div>
                <div className='flex flex-col items-center gap-y-8 md:p-2 md:gap-y-2 md:bg-[#2a6be385] md:rounded-[15px]'>
                    <HazCard
                        img={HazImg1}
                        zamWater={false}
                        historical={false}
                        PackageType={"Silver"}
                        star={3}
                        handler={openHandler}
                    />
                    <HazCard
                        img={HazImg8}
                        zamWater={false}
                        historical={true}
                        PackageType={"Gold"}
                        star={4}
                        handler={openHandler}
                    />
                    <HazCard
                        img={HazImg3}
                        zamWater={true}
                        historical={true}
                        PackageType={"Platinum"}
                        star={3}
                        handler={openHandler}
                    />
                </div>

                <div className='mt-[5rem]'>
                    <div className='mb-5 md:mb-7'>
                        <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>15 Nights Package</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>8 nights in Mecca & 7 nights in Madina</p>
                    </div>
                    <div className='flex flex-col items-center gap-y-8 md:p-2 md:gap-y-2 md:bg-[#2a6be385] md:rounded-[15px]'>
                        <HazCard
                            img={HazImg2}
                            zamWater={false}
                            historical={false}
                            PackageType={"Silver"}
                            star={3}
                            handler={openHandler}
                        />
                        <HazCard
                            img={HazImg5}
                            zamWater={false}
                            historical={true}
                            PackageType={"Gold"}
                            star={4}
                            handler={openHandler}
                        />
                        <HazCard
                            img={HazImg6}
                            zamWater={true}
                            historical={true}
                            PackageType={"Platinum"}
                            star={3}
                            handler={openHandler}
                        />
                    </div>
                </div>

                <div className='my-[5rem]'>
                    <div className='mb-5'>
                        <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>21 Nights Package</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>11 nights in Mecca & 10 nights in Madina</p>
                    </div>
                    <div className='flex flex-col items-center gap-y-8 md:p-2 md:gap-y-2 md:bg-[#2a6be385] md:rounded-[15px]'>
                        <HazCard
                            img={HazImg7}
                            zamWater={false}
                            historical={false}
                            PackageType={"Silver"}
                            star={3}
                            handler={openHandler}
                        />
                        <HazCard
                            img={HazImg8}
                            zamWater={false}
                            historical={true}
                            PackageType={"Gold"}
                            star={4}
                            handler={openHandler}
                        />
                        <HazCard
                            img={HazImg3}
                            zamWater={true}
                            historical={true}
                            PackageType={"Platinum"}
                            star={3}
                            handler={openHandler}
                        />
                    </div>
                </div>
            </div>


            {
                open &&
                (<PopupModal
                    setOpen={setOpen}
                    open={open}
                    img={Haz_Logo}
                />)
            }
        </div>
    )
}

export default WrapperLayout("", "")(Haz);