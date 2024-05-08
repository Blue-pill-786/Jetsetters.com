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
        <footer className='bg-[#6589bd] flex sm:justify-normal mt-10 pb-10 rounded-t-md relative overflow-hidden'>
            <div className='self-start sm:absolute sm:top-[45%] sm:translate-y-[-50%] sm:left-[5%] sm:ml-0 sm:mt-0 ml-10 mt-8'>
                <img
                    src={Logo}
                    alt="JETSETTERSS"
                    className='w-[150px] -ml-7 sm:mt-0 -mt-4 sm:mr-0 mr-2'
                    onClick={() => navigate('/')}
                />
            </div>
            <div className='w-[calc(100%-10%)] mx-auto mt-10 flex flex-col items-center'>
                <div className='flex flex-col justify-start gap-y-1'>
                    <a href="tel:+14088999705"
                        className='text-[#fff] hover:underline sm:text-sm sm:font-medium text-[10px] font-light'
                    >
                        Call Us :
                        <span className='ml-2 sm:text-base'>
                            +14088999705
                        </span>
                    </a>
                    <a href="mailto: bookings@jetsetterss.com"
                        className='text-[#fff] hover:underline sm:text-sm sm:font-medium text-[10px] font-light'
                    >
                        Mail : <span className='ml-2 sm:text-base'>bookings@jetsetterss.com</span>
                    </a>


                    <div className='sm:text-center sm:text-sm sm:font-medium text-[#ffffff] sm:w-full w-[80%] text-[10px] font-light'>
                        Address : <span className='ml-2 sm:text-base text-pretty'>513 W Bonaventure AveTracy, CA 95391</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;




