import React from 'react'
import Logo from '../assets/logos/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center bg-main-bg'>
            <div className='flex items-center lg:w-[80%] md:w-[70%]  justify-between'>
                <Link to={'/'} className='cursor-pointer'>
                    <img
                        src={Logo}
                        alt="logo"
                        className='md:w-[200px] md:h-[200px] sm:w-[150px] w-[120px] object-fill sm-mt-8 sm-mb-4 -mt-5 -mb-2'
                    />
                </Link>

                <h1 className='sm:block hidden logo-head font-bold lg:text-6xl text-4xl text-[#10439F] lg:text-center 
                                '
                >
                    JETSETTERS
                </h1>
            </div>
            <div className='flex md:w-[30%] lg:w-[20%]'>
                <Link to={'/'}>
                    <button className='text-[#fff] lg:px-6 px-4 py-2 text-xl font-medium hover:bg-[#cde7f318] 
                                        rounded-lg  transition duration-200'
                    >
                        Flights
                    </button>
                </Link>
                <Link to={'/cruise'}>
                    <button className='text-[#fff] px-6 py-2 text-xl font-medium hover:bg-[#cde7f318] 
                                        rounded-lg  transition duration-200
                    '>
                        Cruise
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header