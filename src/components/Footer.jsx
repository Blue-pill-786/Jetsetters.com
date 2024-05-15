import React from 'react'
import Logo from '../assets/logos/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Term_Conditions from '../assets/files/Jetsetters-terms.pdf';
import {
    DinerClubIcon,
    DiscoverIcon,
    TempIcon,
    AmericanExpressIcon,
    JcbIcon,
    MasterCardIcon,
    VisaIcon,
    ArcIcon
} from '../assets/footer';

import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

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
    const location = useLocation();
    return (
        <footer className='bg-[#6589bd] flex flex-col sm:justify-normal mt-10 pb-10 sm:p-0 px-4 rounded-t-md overflow-hidden'>
            <div className='sm:w-[calc(100%-10%)] sm:mx-auto flex flex-col md:flex-row items-center gap-5 mb-3'>
                <div className='flex item mt-[1.2rem] md:mt-8 md:w-[70%] w-full'>
                    <img
                        src={Logo}
                        alt="JETSETTERSS"
                        className='w-[75px] md:w-[90px] -mt-7 -ml-5 cursor-pointer'
                    />
                    <div className='text-[10px] sm:text-sm md:text-base font-normal md:font-medium leading-[12px] text-[#daf0fa] md:mt-1'>
                        Jetsetters : Your gateway to exceptional travel. Specializing in flights, cruises, and hotels, our ARC certification ensures unparalleled service and tailored experiences. All rights reserved. Copyright Jetsetters.
                    </div>
                </div>
                <div className='flex justify-between md:w-[28%] w-full'>
                    <Link
                        to={'https://www.facebook.com/profile.php?id=61557536332731'}
                        target='_blank'
                        className='border border-[#fff] px-[5px] md:px-[7px] py-1 rounded-md text-[#fff] hover:border-heading-text hover:bg-white group transition-all duration-200'
                    >
                        <FaFacebookF
                            className='text-[#fff] text-center text-[18px] md:text-xl group-hover:text-[#318acf] transition-all duration-200'
                        />
                    </Link>
                    <Link
                        to={'https://www.instagram.com/jetsetters2024?igsh=MTc4MmM1YmI2Ng%3D%3D'}
                        target='_blank'
                        className='border border-[#fff] px-[5px] md:px-[7px] py-1 rounded-md text-[#fff] hover:border-heading-text hover:bg-white group transition-all duration-200'
                    >
                        <RiInstagramFill
                            className='text-[#fff] text-center text-[18px] md:text-xl group-hover:text-[#318acf] transition-all duration-200'
                        />
                    </Link>
                    {/* <Link
                        to={'https://www.facebook.com/'}
                        target='_blank'
                        className='border border-[#fff] px-[5px] md:px-[7px] py-1 rounded-md text-[#fff] hover:border-heading-text hover:bg-white group transition-all duration-200'
                    >
                        <FaYoutube
                            className='text-[#fff] text-center text-[18px] md:text-xl group-hover:text-[#318acf] transition-all duration-200'
                        />
                    </Link> */}
                    <Link
                        to={"https://twitter.com/Jetsetterscorp"}
                        target='_blank'
                        className='border border-[#fff] px-[5px] md:px-[7px] py-1 rounded-md text-[#fff] hover:border-heading-text hover:bg-white group transition-all duration-200'
                    >
                        <RiTwitterXFill
                            className='text-[#fff] text-center text-[18px] md:text-xl group-hover:text-[#318acf] transition-all duration-200'
                        />
                    </Link>
                    <Link
                        to={'https://www.linkedin.com/in/jetsetters-corporation-b97847309/'}
                        target='_blank'
                        className='border border-[#fff] px-1 md:px-[7px] py-1 rounded-md text-[#fff] hover:border-heading-text hover:bg-white group transition-all duration-200'
                    >
                        <FaLinkedinIn
                            className='text-[#fff] text-center text-[18px] md:text-xl group-hover:text-[#318acf] transition-all duration-200'
                        />
                    </Link>
                </div>
            </div>

            <div className='h-[0.5px] md:h-[1px] w-full bg-neutral-200 my-5 md:w-[calc(100%-3%)] md:mx-auto'>
            </div>

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto flex justify-between flex-wrap mt-3'>
                <img
                    src={DinerClubIcon}
                    alt=""
                    className='w-[75px] h-[50px] md:w-[100px] md:h-[75px]'
                />
                <img
                    src={AmericanExpressIcon}
                    alt=""
                    className='w-[75px] h-[50px] md:w-[100px] md:h-[75px]'
                />
                <img
                    src={DiscoverIcon}
                    alt=""
                    className='w-[75px] h-[50px] md:w-[100px] md:h-[75px]'
                />
                <img
                    src={ArcIcon}
                    alt=""
                    className='w-[75px] h-[50px] md:w-[100px] md:h-[75px]'
                />
                <img
                    src={JcbIcon}
                    alt=""
                    className='w-[75px] h-[50px] md:w-[100px] md:h-[75px]'
                />
                <img
                    src={TempIcon}
                    alt=""
                    className='w-[75px] h-[50px] md:w-[100px] md:h-[75px]'
                />
                <img
                    src={MasterCardIcon}
                    alt=""
                    className='w-[75px] h-[50px] md:w-[100px] md:h-[75px]'
                />
                <img
                    src={VisaIcon}
                    alt=""
                    className='w-[75px] h-[50px] md:w-[100px] md:h-[75px]'
                />
            </div>

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto flex flex-row justify-between items-center mt-4 pb-[3rem] sm:mb-[3rem]'>
                <div className='flex flex-col w-[45%] gap-y-[4px] text-neutral-100 text-xs px-2'>
                    <p className='text-xs sm:text-sm md:text-base text-neutral-100 mb-1'>Contact Us</p>
                    <a href="tel:+14088999705"
                        className='text-xs sm:text-sm md:text-base text-neutral-100 font-light hover:underline'
                    >
                        +14088999705
                    </a>
                    <a href="mailto: bookings@jetsetterss.com"
                        className='text-xs sm:text-sm md:text-base text-neutral-100 font-light hover:underline'
                    >
                        bookings@jetsetterss.com
                    </a>


                    <p className='text-xs sm:text-sm md:text-base text-neutral-100 font-light hover:underline'>
                        513 W Bonaventure Ave Tracy, CA 95391
                    </p>
                </div>

                <div className='flex flex-col w-[45%] gap-y-[4px] text-neutral-100 text-xs px-2'>
                    <p className='text-xs sm:text-sm md:text-base text-neutral-100 mb-1'>Service</p>
                    <Link
                        to='/terms-conditions'
                        className='text-xs sm:text-sm md:text-base text-neutral-100 font-light hover:underline'
                    >
                        Terms & conditions
                    </Link>
                    <Link
                        to="/covid-19"
                        className='text-xs sm:text-sm md:text-base text-neutral-100 font-light hover:underline'
                    >
                        Coronavirus (COVID-19) FAQs
                    </Link>
                    {/* {
                        location.pathname === "/" ? <FooterLink title={"Cruise"} to={'/cruise'} />
                            : location.pathname === '/covid-19' ? <FooterLink title={"Cruise"} to={'/cruise'} />
                                : location.pathname === '/terms-conditions' ? <FooterLink title={"Cruise"} to={'/cruise'} />
                                    : ""
                    } */}
                    {
                        <FooterLink title={"Flights"} to={'/'} />
                    }
                    {
                        <FooterLink title={"Cruise"} to={'/cruise'} />
                    }
                    {/* {
                        location.pathname === "/cruise" ? <FooterLink title={"Flights"} to={'/'} />
                            : location.pathname === '/covid-19' ? <FooterLink title={"Flights"} to={'/'} />
                                : location.pathname === "/terms-conditions" ? <FooterLink title={"Flights"} to={'/'} />
                                    : ""

                    } */}
                </div>

                <div className='flex flex-col self-start gap-y-[4px] text-neutral-100 text-xs px-2'>
                    {/* <p className='text-xs sm:text-sm md:text-base text-neutral-100 mb-1'>About Us</p> */}
                    <Link
                        to="/about"
                        className='text-xs sm:text-sm md:text-base text-neutral-100 font-light hover:underline'
                    >
                        About
                    </Link>
                </div>
            </div>
        </footer >
    )
}

export default Footer;


const FooterLink = ({ title, to }) => {
    return (
        <Link
            to={to}
            className='text-xs sm:text-sm md:text-base text-neutral-100 font-light hover:underline'
        >
            {title}
        </Link>
    )
}




