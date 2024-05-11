import React from 'react'
import Logo from '../assets/logos/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Term_Conditions from '../assets/files/Jetsetters-terms.pdf';

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
        <footer className='bg-[#6589bd] flex sm:justify-normal mt-10 pb-10 rounded-t-md overflow-hidden'>
            <div className=''>
                <img
                    src={Logo}
                    alt="JETSETTERSS"
                    className='sm:w-[150px] w-[120px] mt-3 md:ml-5'
                    onClick={() => navigate('/')}
                />
            </div>
            <div className='w-[calc(100%-10%)] flex flex-row sm:justify-evenly items-center mt-4'>
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


                    <div className='sm:text-center sm:text-sm sm:font-medium text-[#ffffff] sm:w-full w-[70%] text-[10px] font-light'>
                        Address : <span className='ml-2 sm:text-base text-pretty'>513 W Bonaventure Ave Tracy, CA 95391</span>
                    </div>
                </div>

                <div className='flex flex-col gap-y-1 justify-start'>
                    <Link
                        to='/terms-conditions'
                        className='text-[#fff] hover:underline sm:text-base sm:font-medium text-[10px] font-light'
                    >
                        Terms & conditions
                    </Link>
                    <Link
                        to="/covid-19"
                        className='text-[#fff] hover:underline sm:text-base sm:font-medium text-[10px] font-light'
                    >
                        Coronavirus (COVID-19) FAQs
                    </Link>
                    {
                        location.pathname === "/" ? <FooterLink title={"Cruise"} to={'/cruise'} />
                            : location.pathname === '/covid-19' ? <FooterLink title={"Cruise"} to={'/cruise'} />
                                : location.pathname === '/terms-conditions' ? <FooterLink title={"Cruise"} to={'/cruise'} />
                                    : ""
                    }
                    {
                        location.pathname === "/cruise" ? <FooterLink title={"Flights"} to={'/'} />
                            : location.pathname === '/covid-19' ? <FooterLink title={"Flights"} to={'/'} />
                                : location.pathname === "/terms-conditions" ? <FooterLink title={"Flights"} to={'/'} />
                                    : ""

                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer;


const FooterLink = ({ title, to }) => {
    return (
        <Link
            to={to}
            className='text-[#fff] hover:underline sm:text-base sm:font-medium text-[10px] font-light'
        >
            {title}
        </Link>
    )
}




