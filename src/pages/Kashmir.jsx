import React, { useState } from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import PopupModal from '../components/shared/PopupModal';
import PackageCard from '../components/Tour_Packages/PackageCard';
import {
    KashmirImg1, KashmirImg2, KashmirImg3,
    KashmirImg4, KashmirImg5, KashmirImg6, KashmirImg7
} from '../assets/packages-img'

const Kashmir = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    }

    return (
        <div>
            <div className='kashmir-hero min-h-[calc(100vh-60px)] h-full w-[100%] md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden'>
                <div className='w-full h-full flex flex-col justify-center lg:mt-[5rem] mt-[10rem] md:mt-[4rem] sm:p-10'>
                    <h1 className='lg:text-6xl md:text-5xl text-4xl text-[#000a49] font-content font-bold drop-shadow-md shadow-black md:leading-[2.4rem] lg:leading-[3rem] leading-[2rem] lg:w-11/12 up-animate-head'>Discover Kashmir Majestic Mountains and Lush Valleys</h1>
                    <p className='sm:text-2xl text-lg text-[#090d26] font-content md:font-semibold drop-shadow-md shadow-black mt-2 md:w-1/2 w-4/5 up-animate-para'>Find Your Bliss in Kashmir Perfect Getaways for Every Traveler</p>
                </div>
            </div>

            <div className='w-full bg-[#fff] backdrop-blur-sm bg-gradient-to-b to-[#ffffff73] via-[#fa9d0841] from-[#01a11954] py-5 relative'>
                <img
                    src={"https://packtokashmir.com/wp-content/uploads/2023/03/logo_final1.png"}
                    alt="dubai_logo"
                    className='w-[200px] mx-auto object-center object-fill bg-transparent'
                />
            </div>

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto mb-10 sm:p-0 p-4'>
                <div className='mt-5 mb-[5rem]'>
                    <div className='mb-5 md:mb-7'>
                        <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>Our Packages</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>Book now for unforgettable adventures.</p>
                    </div>
                    <div className='flex flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <PackageCard
                            imageData={[KashmirImg1,KashmirImg2]}
                            level={"Silver"}
                            transportation={"All transfers and sightseeing as itinerary"}
                            hotel={2}
                            meals={"Daily Breakfast and Dinner"}
                            handler={openHandler}
                            packageName={"kashmir"}
                            extra={"Sanitised service"}
                            AddOn={["Shikara ride"]}
                            redirectPage={"/silver-details"}
                        />
                        <PackageCard
                            imageData={[KashmirImg4,KashmirImg6]}
                            level={"Gold"}
                            transportation={"All transfers and sightseeing as itinerary"}
                            hotel={3}
                            meals={"Daily Breakfast and Dinner"}
                            handler={openHandler}
                            packageName={"kashmir"}
                            extra={"Sanitised service"}
                            AddOn={["Shikara ride","Welcome drink on arrival"]}
                            redirectPage={"/gold-details"}
                        />
                        <PackageCard
                            imageData={[KashmirImg5,KashmirImg3,KashmirImg7]}
                            level={"Platinum"}
                            transportation={"All transfers and sightseeing as itinerary"}
                            hotel={4}
                            meals={"Daily Breakfast and Dinner"}
                            handler={openHandler}
                            packageName={"kashmir"}
                            extra={"Sanitised service"}
                            AddOn={["Shikara ride","Welcome drink on arrival","Assistance at Srinagar/Jammu airport"]}
                            redirectPage={"/platinum-details"}
                        />
                    </div>
                </div>
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

export default WrapperLayout()(Kashmir);