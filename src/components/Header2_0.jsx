import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/logos/logo_dark.png'
import { Link, useLocation } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import HeaderBanner from './shared/HeaderBanner'

const Header2_0 = () => {
    const menuRef = useRef();
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    const showNav = () => {
        if (!menuRef.current.classList.contains("active")) {
            setOpen(true)
            menuRef.current.classList.add("active")
        }
        else {
            setOpen(false);
            menuRef.current.classList.remove("active");
        }
    }

    useEffect(() => {
        const close = (e) => {
            if (menuRef.current.classList.contains('active') && !menuRef.current.contains(e.target)) {
                setOpen(false);
                menuRef.current.classList.remove("active");
            }
        }
        document.addEventListener('mousedown', close, true);

        return () => {
            document.removeEventListener('mousedown', close, true);
        }
    })

    return (
        <div className='fixed top-0 left-0 right-0 z-[1000] shadow-2xl shadow-[#0000005e]'>
            <div className='md:h-[90px] h-[70px] bg-main-bg px-4 text-[#fff] flex justify-between relative'>
                <div className='flex items-center gap-x-10 justify-between w-[70%]'>
                    <div className='flex items-center gap-x-2'>
                        <Link to={'/'} >
                            <img
                                src={Logo}
                                alt="jetsetters"
                                className='md:w-[100px] md:h-[100px] w-[70px] h-[70px] aspect-auto mb-2 mt-3'
                            />
                        </Link>

                        <p className='font-heading md:text-4xl text-3xl tracking-wide font-bold capitalize text-[#10439F] drop-shadow-head-shade'>Jetsetters</p>
                    </div>

                    <div className='md:flex lg:gap-x-6 gap-x-2 hidden w-[40%] justify-between font-content'>
                        <Link to={'/'}>
                            <span className={`md:text-lg font-semibold hover:underline transition-all duration-150 cursor-pointer
                                        ${pathname === '/' ? "text-heading-text" : "text-[#fff] hover:text-heading-text"}`
                            }>
                                Flight
                            </span>
                        </Link>
                        <Link to='/cruise'>
                            <span className={`md:text-lg font-semibold hover:underline transition-all duration-150 cursor-pointer
                                        ${pathname === '/cruise' ? "text-heading-text" : "text-[#fff] hover:text-heading-text"}`
                            }>
                                Cruise
                            </span>
                        </Link>
                        <Link to={'/about'}>
                            <span className={`md:text-lg text-nowrap font-semibold hover:underline transition-all duration-150 cursor-pointer
                                        ${pathname === '/about' ? "text-heading-text" : "text-[#fff] hover:text-heading-text"}`
                            }>
                                About Us
                            </span>
                        </Link>
                        <Link to={'#'}>
                            <span className={`md:text-lg text-nowrap font-semibold hover:underline transition-all duration-150 cursor-pointer
                                        ${pathname === '/contact-us' ? "text-heading-text" : "text-[#fff] hover:text-heading-text"}`
                            }>
                                Contact Us
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-x-2 lg:mr-[2rem]'>
                    <p className='text-[#fff] font-medium lg:text-lg text-base md:block hidden'>Packages & more</p>
                    {!open && <button
                        className='cursor-pointer'
                        onClick={showNav}
                    >
                        <TiThMenu className='text-[30px]' />
                    </button>}

                    {open && <button
                        className='cursor-pointer'
                        onClick={showNav}
                    >
                        <FaTimes className='text-[30px]' />
                    </button>}

                    <div
                        ref={menuRef}
                        className='nav-menu bg-main-bg'>
                        <p className='text-white text-xl text-center md:block hidden'>Working on</p>
                        <div className='md:hidden flex flex-col items-center justify-center gap-y-2 font-content'>
                            <Link to={'/'}>
                                <span className={`text-lg font-semibold hover:underline transition-all duration-150 cursor-pointer
                                        ${pathname === '/' ? "text-heading-text" : "text-[#fff] hover:text-heading-text"}`
                                }>
                                    Flight
                                </span>
                            </Link>
                            <Link to='/cruise'>
                                <span className={`text-lg font-semibold hover:underline transition-all duration-150 cursor-pointer
                                        ${pathname === '/cruise' ? "text-heading-text" : "text-[#fff] hover:text-heading-text"}`
                                }>
                                    Cruise
                                </span>
                            </Link>
                            <Link to={'/about'}>
                                <span className={`text-lg font-semibold hover:underline transition-all duration-150 cursor-pointer
                                        ${pathname === '/about' ? "text-heading-text" : "text-[#fff] hover:text-heading-text"}`
                                }>
                                    About Us
                                </span>
                            </Link>
                            <Link to={'#'}>
                                <span className={`text-lg font-semibold hover:underline transition-all duration-150 cursor-pointer
                                        ${pathname === '/contact-us' ? "text-heading-text" : "text-[#fff] hover:text-heading-text"}`
                                }>
                                    Contact Us
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[0.7px] w-full bg-[#90ccf8f8]'></div>
            <HeaderBanner />
        </div>
    )
}

export default Header2_0