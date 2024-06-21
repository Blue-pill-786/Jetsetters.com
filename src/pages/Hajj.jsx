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

const Hajj = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    }
    return (
        <div className=''>
            <div className='haz-hero min-h-[calc(100vh-60px)] h-full w-[100%] md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden'>
                <div className='w-full h-full flex flex-col justify-center lg:mt-[5rem] mt-[10rem] md:mt-[4rem] sm:p-10'>
                    <h1 className='lg:text-6xl md:text-5xl text-4xl text-[#FFFFFF] font-content font-bold drop-shadow-md up-animate-head shadow-black lg:leading-[3rem] leading-[2.4rem] lg:w-11/12'>Hajj & Umrah packages 2024</h1>
                    <p className='sm:text-2xl text-lg  text-[#ffffffdc] font-content md:font-semibold drop-shadow-md shadow-black up-animate-para mt-2 md:w-1/2 w-4/5'>Browse our special hajj packages designed to suit your budget!</p>
                </div>
            </div>
            <div className='w-full py-5 backdrop-blur-sm bg-gradient-to-b to-[#95c9fd02] via-[#00fb1d18] from-[#e1ffc29b]'>
                <img
                    src={Haz_Logo}
                    alt="hajj"
                    className='w-[200px] mx-auto '
                />
            </div>
            <div className='sm:w-[calc(100%-10%)] sm:mx-auto mb-10 sm:p-0 p-4'>
                <div className='mt-5'>
                    <div className='mb-5 md:mb-7'>
                        <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>7 Nights Package</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>4 nights in Mecca & 3 nights in Madina</p>
                    </div>
                    <div className='flex flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <HazCard
                            img={HazImg1}
                            star={3}
                            handler={openHandler}
                            transportTitle={"Jeddah - Mecca - Madina - Jeddah"}
                            PackageType={"Silver"}
                            packageName={"Hajj"}
                        />
                        <HazCard
                            img={HazImg8}
                            PackageType={"Gold"}
                            star={4}
                            transportTitle={"Jeddah - Mecca - Madina - Jeddah"}
                            extra={"Tour of Historical sites:"}
                            handler={openHandler}
                            packageName={"Hajj"}
                        />
                        <HazCard
                            img={HazImg3}
                            transportTitle={"Jeddah - Mecca - Madina - Jeddah"}
                            extra={"Tour of Historical sites:"}
                            handler={openHandler}
                            overload={"10L Zam-zam Water:"}
                            PackageType={"Platinum"}
                            star={5}
                            packageName={"Hajj"}
                        />
                    </div>
                </div>

                <div className='mt-[5rem]'>
                    <div className='mb-5 md:mb-7'>
                        <h1 className='text-3xl md:text-6xl hajj-box text-center text-[#e59545] font-bold'>15 Nights Package</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>8 nights in Mecca & 7 nights in Madina</p>
                    </div>
                    <div className='flex flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <HazCard
                            img={HazImg4}
                            star={3}
                            handler={openHandler}
                            transportTitle={"Jeddah - Mecca - Madina - Jeddah"}
                            PackageType={"Silver"}
                            packageName={"Hajj"}
                        />
                        <HazCard
                            img={HazImg8}
                            PackageType={"Gold"}
                            star={4}
                            transportTitle={"Jeddah - Mecca - Madina - Jeddah"}
                            extra={"Tour of Historical sites:"}
                            handler={openHandler}
                            packageName={"Hajj"}
                        />
                        <HazCard
                            img={HazImg3}
                            transportTitle={"Jeddah - Mecca - Madina - Jeddah"}
                            extra={"Tour of Historical sites:"}
                            handler={openHandler}
                            overload={"10L Zam-zam Water:"}
                            PackageType={"Platinum"}
                            star={5}
                            packageName={"Hajj"}
                        />
                    </div>
                </div>

                <div className='my-[5rem]'>
                    <div className='mb-5'>
                        <h1 className='text-3xl  md:text-6xl text-center text-[#e59545] font-bold'>21 Nights Package</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>11 nights in Mecca & 10 nights in Madina</p>
                    </div>
                    <div className='flex flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <HazCard
                            img={HazImg4}
                            star={3}
                            handler={openHandler}
                            transportTitle={"Jeddah - Mecca - Madina - Jeddah"}
                            PackageType={"Silver"}
                            packageName={"Hajj"}
                        />
                        <HazCard
                            img={HazImg8}
                            PackageType={"Gold"}
                            star={4}
                            transportTitle={"Jeddah - Mecca - Madina - Jeddah"}
                            extra={"Tour of Historical sites:"}
                            handler={openHandler}
                            packageName={"Hajj"}
                        />
                        <HazCard
                            img={HazImg3}
                            transportTitle={"Jeddah - Mecca - Madina - Jeddah"}
                            extra={"Tour of Historical sites:"}
                            handler={openHandler}
                            overload={"10L Zam-zam Water:"}
                            PackageType={"Platinum"}
                            star={5}
                            packageName={"Hajj"}
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

export default WrapperLayout("HAJJ & UMRAH Package | Jetsetters", "")(Hajj);