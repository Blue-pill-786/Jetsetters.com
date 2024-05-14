import React, { useState } from 'react'
import Logo from '../assets/logos/logo.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import PopupModal from '../components/shared/PopupModal'
import { cruiseCardData, cruiseServiceCardData } from '../data'
import CruiseImgCard from '../components/CruiseImgCard'
import { useLocation, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import GridTemplate from '../components/shared/GridTemplate'
import {cruisePriceData} from '../data';

const initialData = {
    from: "",
    to: "",
    phone: "",
    email: "",
}

const Cruise = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(initialData);
    const location = useLocation();
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    const handlePhoneInput = (value) => {
        setData((prev) => ({ ...prev, ['phone']: value }));
    }

    const sumbitHandle = (e) => {
        e.preventDefault();
        setOpen(true);
    }

    return (
        <>
            <div className='hero-cruise-image lg:min-h-screen w-[100%] md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden'>
                <div className='w-full flex md:flex-row flex-col gap-y-10 sm:justify-between sm:mb-0 mb-10'>
                    <div className='flex flex-col sm:gap-y-[5rem] sm:-mt-8'>
                        <div className='flex items-center lg:gap-x-[8rem] sm:mt-3'>
                            <img
                                src={Logo}
                                alt="logo"
                                className='md:w-[200px] md:h-[200px] sm:w-[150px] w-[120px] object-fill'
                            />

                            <h1 className='logo-head font-bold lg:text-6xl text-4xl text-[#10439F] lg:text-center lg:ml-0 md:-ml-6'>JETSETTERS</h1>
                        </div>
                        <div className='md:ml-14 sm:ml-7 ml-5 md:mt-[150px] '>
                            <h2 className='text-[#f1f8fc] font-bold lg:text-6xl xl:text-7xl md:text-5xl text-5xl mt-5 drop-shadow-xl shadow-[#000]'>
                                Explore Our Cheapest Cruise Search
                            </h2>
                        </div>
                    </div>

                    <form id='form' onSubmit={sumbitHandle} className='lg:min-w-[450px] lg:w-[60%] md:min-w-[40%] lg:min-h-[calc(100vh-40px)] flex flex-col gap-y-16 bg-gradient-to-r lg:mb-0 mb-10 
                                    md:rounded-none md:rounded-l-[50px] rounded-[30px] shadow-2xl shadow-[#6e3a2b86] from-[#e77240] via-[#d56230] to-[#faaa1ff1]'>
                        <div className='flex justify-center gap-x-5 mb-5 overflow-hidden'>
                            <button
                                type='button'
                                className={`${location.pathname === '/' ? "bg-[#fff]" : "bg-[#00000057] text-[#ffffffac] hover:bg-[#fff] hover:text-[#000]"}  text-center font-bold sm:text-3xl text-2xl sm:w-[150px]
                                                sm:rounded-b-[20px] rounded-b-[22px] sm:px-1 px-8 sm:py-[10px] py-3 mb-5 transition duration-500`}
                                onClick={() => navigate('/')}
                            >
                                Flights
                            </button>
                            <button
                                type='button'
                                className={`${location.pathname === '/cruise' ? "bg-[#fff] text-[#000]" : "bg-[#00000057] text-[#ffffffac] hover:bg-[#fff] hover:text-[#000]"} text-center font-bold sm:text-3xl text-2xl sm:w-[150px] sm:rounded-b-[20px]
                                            rounded-b-[22px] sm:px-1 px-8 sm:py-[10px] py-3 mb-5 transition duration-500`}
                                onClick={() => navigate('/cruise')}
                            >
                                Cruise
                            </button>
                        </div>
                        <div className='flex flex-col justify-between gap-7 items-center'>
                            <div className='w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative'>
                                <input
                                    type="email"
                                    name='email'
                                    id='email'
                                    value={data.email}
                                    placeholder='Email*'
                                    required
                                    onChange={onChangeHandler}
                                    className='w-full px-3 py-2 border-[2px] rounded-[30px] border-[#bbab8cad] outline-none text-xl text-[#000000b4] font-medium placeholder:text-[#848383] placeholder:font-normal'
                                />
                            </div>
                            <div className='w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative '>
                                <PhoneInput
                                    country={'us'}
                                    value={data.phone}
                                    onChange={handlePhoneInput}
                                    inputProps={{ required: true }}
                                    placeholder='Phone*'
                                    inputStyle={{
                                        width: '100%',
                                        borderRadius: "30px",
                                        padding: "22px 0px",
                                        paddingLeft: "4rem",
                                        border: "2px solid #bbab8cad",
                                        fontSize: "18px",
                                        color: "#000000b4"
                                    }}
                                    buttonStyle={{
                                        width: "15%",
                                        height: "40px",
                                        border: "none",
                                        borderRight: "1px solid #bbab8cad",
                                        marginTop: "3px", paddingLeft: "0.7rem",
                                        borderRadius: "30px 0px 0px 30px",
                                        background: "none"
                                    }}
                                    dropdownStyle={{
                                        borderRadius: "30px 30px 0px 0px",
                                        padding: "10px",
                                    }}
                                />
                            </div>
                        </div>
                        <div className='mx-auto lg:mb-0 mb-10 z-[0] group self-end'>
                            <button
                                type='submit'
                                className='relative text-white bg-[#10439F] group-hover:bg-[#1e66ee] text-xl text-center font-semibold 
                                                px-7 py-3 border-2 border-[#2b355d1b] rounded-l-[30px] transition-colors duration-[0.25s]'>
                                <span className='mr-5'>
                                    BOOK NOW
                                </span>
                                <MdOutlineKeyboardArrowRight
                                    className='absolute text-[#10439F] group-hover:text-[#1e66ee] bg-white text-[53px] rounded-full 
                                        top-[-0.5px] -right-[24px] transition-colors duration-[0.25s]'
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto my-10 sm:p-0 p-4'>
                <div className='my-10'>
                    <h1 className='text-6xl font-medium mt-10 pt-10 pb-5 text-neutral-700'>Explore by Departure Port</h1>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5'>
                        {
                            cruiseCardData.map((data, index) => (
                                <CruiseImgCard
                                    key={index}
                                    data={data}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='my-10'>
                    <h1 className='text-6xl font-medium mt-10 pt-10 pb-5 text-neutral-700'>
                        Explore by Cruise Line
                    </h1>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 lg:gap-10 gap-5 px-2'>
                        {
                            cruiseServiceCardData.map((data, index) => (
                                <div
                                    key={index}
                                    className='w-full h-[300px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
                                            overflow-hidden group cursor-pointer relative'
                                >
                                    <img
                                        src={data.img}
                                        alt={data.title}
                                        className='w-full h-full object-cover rounded-sm group-hover:border-[5px] border-[#1f3d4759]'
                                    />

                                    <div className='text-white absolute top-[5px] -left-[100%] text-lg z-[100] px-4 py-4 bg-[#1f3d4738] group-hover:left-[5px] transition-all 
                                            duration-[0.5s] backdrop-blur-[5px] rounded-r-sm font-medium
                                    ' onClick={() => setOpen(true)}
                                    >
                                        Book your choice Cruise Line
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='bg-[#3060a90c] my-20'>
                <GridTemplate data={cruisePriceData} />
            </div>


            {
                open && <PopupModal
                    title={"Cruise"}
                    open={open}
                    setOpen={setOpen}
                />
            }
        </>
    )
}

export default WrapperLayout("Cruise | Jetsetters", "Plan your trip with Jetsetters cruise service")(Cruise);