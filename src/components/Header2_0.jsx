import React from 'react'
import Logo from '../assets/logos/logo.png'
import { Link } from 'react-router-dom'

const Header2_0 = () => {
    return (
        <div className='h-[100px] bg-main-bg flex justify-between items-center px-4'>
            <div className='flex items-center'>
                <Link to={'/'} >
                    <img
                        src={Logo}
                        alt="jetsetters"
                        className='w-[100px] h-[100px]'
                    />
                </Link>

                <p className='text-[#fff]'>Jetsetters</p>
            </div>

            <div className='flex gap-x-6'>
                <Link>
                    <span>
                        Flight
                    </span>
                </Link>
                <Link>
                    <span>
                        Cruise
                    </span>
                </Link>
                <Link>
                    <span>
                        About
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Header2_0