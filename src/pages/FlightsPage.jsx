import React, { useState } from 'react'
import Logo from '../assets/logos/logo.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { FiPlus, FiMinus } from "react-icons/fi";
import PopupModal from '../components/shared/PopupModal';
import Flights from '../components/shared/Flights';
import { flightsData } from '../data';
const initialData = {
    from: "",
    to: ""
}
const FlightsPage = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(initialData);
    const [openUserbox, setOpenUserbox] = useState(false)
    const [passengerData, setPassengerData] = useState({
        adult: 2,
        children: 0,
    });
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }
    const sumbitHandle = (e) => {
        e.preventDefault();
        console.log(data);
        setOpen(true)
        setData(initialData);
    }
    return (
        <>
            <div>
                <div className='hero-image lg:min-h-screen w-[100%] md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden'>
                    <div className='w-full flex md:flex-row flex-col gap-y-10 sm:justify-between sm:mb-0 mb-10'>
                        <div className='flex flex-col gap-y-10 sm:-mt-8'>
                            <div className='flex items-center sm:mt-3'>
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className='md:w-[200px] md:h-[200px] sm:w-[150px] w-[120px] object-fill'
                                />

                                <h1 className='logo-head font-bold lg:text-5xl text-4xl text-[#3ba7ff] lg:text-center lg:ml-0 md:-ml-6'>JETSETTERSS</h1>
                            </div>
                            <div className='md:ml-14 sm:ml-7 ml-5'>
                                <h2 className='text-[#302626] font-bold lg:text-6xl xl:text-7xl md:text-5xl text-5xl mt-5'>
                                    Discover unique flights awaiting you here.
                                </h2>
                            </div>
                        </div>

                        <form id='form' onSubmit={sumbitHandle} className='lg:min-w-[450px] lg:w-[70%] md:min-w-[40%] lg:min-h-[calc(100vh-40px)] flex flex-col gap-y-16 bg-gradient-to-r md:mt-[1px] lg:mb-0 mb-10 
                                    md:rounded-none md:rounded-l-[50px] rounded-[30px] shadow-2xl shadow-[#6e3a2b86] from-[#e77240] via-[#d56230] to-[#faaa1ff1]'>

                            <div className='bg-white text-center font-bold sm:text-5xl text-2xl sm:w-[250px] mx-auto sm:rounded-b-[20px] rounded-b-[22px] sm:px-1 px-8 sm:py-[10px] py-3 mb-5'>
                                FLIGHTS
                            </div>

                            <div className='flex flex-col justify-between items-center'>
                                <div className='w-3/4 p-1 rounded-[30px] bg-[#ffffff] overflow-hidden my-5'>
                                    <input
                                        type="text"
                                        name='from'
                                        id='from*'
                                        value={data.from}
                                        placeholder='From'
                                        required
                                        onChange={onChangeHandler}
                                        className='w-full px-3 py-2 border-[2px] rounded-[30px] border-fad border-[#bbab8cad] outline-none text-xl text-[#000000b4] font-medium placeholder:text-[#848383]'
                                    />
                                </div>
                                <div className='w-3/4 p-1 rounded-[30px] bg-[#ffffff] overflow-hidden my-5'>
                                    <input
                                        type="text"
                                        name='to'
                                        id='to'
                                        value={data.to}
                                        placeholder='To*'
                                        required
                                        onChange={onChangeHandler}
                                        className='w-full px-3 py-2 border-[2px] rounded-[30px] border-[#bbab8cad] outline-none text-xl text-[#000000b4] font-medium placeholder:text-[#848383]'
                                    />
                                </div>
                                <div className='w-3/4 p-1 z-[10] relative rounded-[30px] bg-[#ffffff] my-5'>
                                    <div
                                        className='w-full flex flex-row gap-2 justify-between items-center px-3 py-2 
                                                    border-[2px] rounded-[30px] border-[#bbab8cad] cursor-pointer 
                                                    outline-none text-xl text-[#BBAB8C]'
                                        onClick={() => setOpenUserbox(!openUserbox)}
                                    >
                                        <span className='flex gap-2'>
                                            <LuUser2 className='text-neutral-500 mb-1' size={22} />
                                            <span className='text-[#848383]'>{`${passengerData.adult} adults · ${passengerData.children} children `}</span>
                                        </span>
                                        <RiArrowDropDownLine className='text-neutral-900 self-end' size={36} />
                                    </div>

                                    {
                                        openUserbox && (
                                            <div
                                                className='w-[285px] absolute flex flex-col gap-y-2 px-6 py-2 top-[50%] left-[8%] xl:translate-x-[70%] lg:translate-x-[10%] md:translate-x-0 sm:-left-5
                                                            translate-y-[18%] rounded-md p-1 transition-transform duration-150 z-[1000]
                                                            bg-[#ffffff] text-[#000] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                                                            '
                                            >
                                                <div className='w-full flex items-center mt-5 justify-between'>
                                                    <span className='text-base font-medium'>Adults</span>
                                                    <Inc_Dec_Box
                                                        min={1}
                                                        initialValue={passengerData}
                                                        setData={setPassengerData}
                                                        name={"adult"}
                                                    />
                                                </div>
                                                <div className='w-full flex items-center justify-between'>
                                                    <span className='text-base font-medium'>Children</span>
                                                    <Inc_Dec_Box
                                                        min={0}
                                                        initialValue={passengerData}
                                                        setData={setPassengerData}
                                                        name={"children"}
                                                    />
                                                </div>

                                                <button
                                                    className='w-full my-3 text-base text-center px-2 py-1 text-[#006CE4] border border-[#006ae4df] 
                                                rounded-[4px] hover:bg-[#006ae40d] font-medium'
                                                    onClick={() => setOpenUserbox(false)}
                                                >
                                                    Done
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>


                            </div>

                            <div className='mx-auto lg:mb-0 mb-10 z-[0] group'>
                                <button
                                    type='submit'
                                    className='relative text-white bg-[#2b79d9] group-hover:bg-[#176bd0] text-xl text-center font-semibold 
                                                px-7 py-3 border-2 border-[#2b355d1b] rounded-l-[30px] transition-colors duration-[0.25s]'>
                                    <span className='mr-5'>
                                        BOOK NOW
                                    </span>
                                    <MdOutlineKeyboardArrowRight
                                        className='absolute text-[#2b79d9] group-hover:text-[#176bd0] bg-white text-[53px] rounded-full 
                                        top-[-0.5px] -right-[24px] transition-colors duration-[0.25s]'
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {
                    open && <PopupModal open={open} setOpen={setOpen} />
                }
            </div>

            <Flights flightsData={flightsData} />
        </>
    )
}

export default FlightsPage;


const Inc_Dec_Box = ({ min = 0, max, initialValue, name, setData }) => {
    const handleIncrement = () => {
        setData({ ...initialValue, [name]: initialValue[name] + 1 });
    }
    const handleDecrement = () => {
        if (initialValue[name] > min) {
            setData({ ...initialValue, [name]: initialValue[name] - 1 });
        }
    }
    return (
        <div className='border-2 border-[#C5C5C5] rounded-[4px] px-2 py-1 min-w-[80px] w-[120px] flex justify-center items-center gap-x-5'>
            <FiMinus
                onClick={handleDecrement}
                size={20}
                className={min >= initialValue[name] ? "cursor-none text-[#C5C5C5]" : "cursor-pointer text-[#006CE4]"}
            />
            <span className='text-[#000000] text-lg'>{initialValue[name]}</span>
            <FiPlus
                onClick={handleIncrement}
                size={20}
                className='cursor-pointer text-[#006CE4]'
            />
        </div>
    )
}