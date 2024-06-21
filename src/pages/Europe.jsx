import React, { useState } from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout';
import PopupModal from '../components/shared/PopupModal';
import HazCard from '../components/shared/HazCard';
import {
    ItalyImg1, ItalyImg2, ItalyImg3,
    ParisImg1, ParisImg2, ParisImg3,
    LondonImg1, LondonImg2, LondonImg3,
    EuropeLogo
} from '../assets/packages-img'

const Europe = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    }
    return (
        <div>
            <div className='europe-hero min-h-[calc(100vh-60px)] h-full w-[100%] md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden'>
                <div className='w-full h-full flex flex-col justify-center lg:mt-[5rem] mt-[10rem] md:mt-[4rem] sm:p-10'>
                    <h1 className='lg:text-6xl md:text-5xl text-4xl text-[#FFFFFF] font-content font-bold drop-shadow-md shadow-black md:leading-[2.4rem] lg:leading-[3rem] leading-[2rem] lg:w-11/12 up-animate-head'>Experience Europe like never before exclusive packages available.</h1>
                    <p className='sm:text-2xl text-lg sm:text-[#ffffffdc] text-[#fff] font-content md:font-semibold drop-shadow-md shadow-black mt-2 md:w-1/2 w-4/5 up-animate-para'>Luxury, Adventure, Culture – Your European Dream Vacation</p>
                </div>
            </div>

            <div className='w-full bg-[#fff] backdrop-blur-sm bg-gradient-to-b to-[#95c9fd02] via-[#39577b47] from-[#39577bbd] py-5 relative'>
                <img
                    src={EuropeLogo}
                    alt="dubai_logo"
                    className='w-[300px] mx-auto  object-center object-fill bg-transparent'
                />
            </div>

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto mb-10 sm:p-0 p-4'>
                <FullPackage
                    head={"Paris Packages"}
                    subHead={"Savor the Elegance and Culture of Paris with Our Expert Tours"}
                    imageData={[ParisImg1, ParisImg2, ParisImg3]}
                    PackageName={"Paris"}
                    handler={openHandler}
                />
                <FullPackage
                    head={"London Packages"}
                    subHead={"Explore the Heart of England with Our Exclusive London Tours"}
                    imageData={[LondonImg1, LondonImg2, LondonImg3]}
                    PackageName={"London"}
                    handler={openHandler}
                />
                <FullPackage
                    head={"Italy Packages"}
                    subHead={"Explore Italy's Timeless Treasures with Our Expertly Curated Tours"}
                    imageData={[ItalyImg1, ItalyImg2, ItalyImg3]}
                    PackageName={"Italy"}
                    handler={openHandler}
                />
            </div>

            {
                open &&
                (<PopupModal
                    setOpen={setOpen}
                    open={open}
                    img={"https://www.europetourpackage.net/Images/europe_logo.png"}
                />)
            }
        </div>
    )
}

export default WrapperLayout('', '')(Europe);


const FullPackage = ({ head, subHead, imageData, handler, PackageName }) => {
    return (
        <div className='mt-5 mb-[5rem]'>
            <div className='mb-5 md:mb-7'>
                <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>{head}</h1>
                <p className='text-lg md:text-xl text-center text-[#000] font-medium'>{subHead}</p>
            </div>
            <div className='flex flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                <HazCard
                    img={imageData[0]}
                    PackageType={"Silver"}
                    transportTitle={PackageName+" City tour"}
                    star={3}
                    handler={handler}
                    packageName={PackageName}
                />
                <HazCard
                    img={imageData[1]}
                    transportTitle={"Paris City tour"}
                    // extra={"BBQ Dinner"}
                    PackageType={"Gold"}
                    star={4}
                    handler={handler}
                    packageName={"Paris"}
                />
                <HazCard
                    img={imageData[2]}
                    transportTitle={"Paris City tour"}
                    // overload={"Desert Safari"}
                    // extra={"BBQ Dinner"}
                    PackageType={"Platinum"}
                    star={5}
                    handler={handler}
                    packageName={"Paris"}
                />
            </div>
        </div>
    )
}