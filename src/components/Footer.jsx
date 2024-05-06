import React from 'react'
import Logo from '../assets/logos/logo.png'
import { useNavigate } from 'react-router-dom';

const MainLink = [
    {
        title: "Call us",
        to: "#",
        type: "tel"
    },
    {
        title: "Mail",
        to: "#",
        type: "mail"
    },
]

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className='bg-[#6589bd] flex sm:justify-normal justify-evenly mt-10 pb-10 rounded-t-md relative overflow-hidden'>
            <div className='self-start sm:absolute sm:top-[45%] sm:translate-y-[-50%] sm:left-[5%] sm:ml-0 sm:mt-0 ml-10 mt-8'>
                <img
                    src={Logo}
                    alt="JETSETTERSS"
                    className='w-[150px] -ml-7'
                    onClick={() => navigate('/')}
                />
            </div>
            <div className='w-[calc(100%-10%)] mx-auto mt-10 flex flex-col'>
                <div className='flex sm:flex-row flex-col sm:justify-center sm:gap-x-3'>
                    <a href="tel:+"
                        className='text-[#fff] hover:underline sm:text-sm sm:font-medium text-[10px] font-thin'
                    >
                        Call Us
                    </a>
                    <a href="mailto: bookings@jetsetterss.com"
                        className='text-[#fff] hover:underline sm:text-sm sm:font-medium text-[10px] font-thin'
                    >
                        Mail
                    </a>
                </div>

                <div className='sm:text-center sm:text-sm sm:font-medium text-[#ffffff] sm:w-full w-[30%] text-[10px] font-thin'>
                    <span>Address : </span>513 W Bonaventure AveTracy, CA 95391
                </div>
            </div>
        </footer>
    )
}

export default Footer;




