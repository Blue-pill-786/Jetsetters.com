import React from 'react'
import { Link } from 'react-router-dom'

const MainLink = [
    {
        title: "Services",
        to: "#"
    },
    {
        title: "Call us",
        to: "#"
    },
    {
        title: "Mail",
        to: "#"
    },
    {
        title: "Customer Service Help",
        to: "#"
    },
    {
        title: "Become an affiliate",
        to: "#"
    },
    {
        title: "Jetsetters.com for Business",
        to: "#"
    },
]

const Footer = () => {
    return (
        <footer>
            <div className='bg-[#6589bd] w-full mt-10'>
                <div className='w-[100%] flex items-center justify-center'>
                    <button className='my-4 px-4 text-sm text-white border border-white py-1 rounded-md hover:bg-[#ffffff1b]'>
                        Book your first flight
                    </button>
                </div>

                <div className='h-[0.5px] bg-white'></div>

                <div className='w-[calc(100%-10%)] mx-auto'>
                    <div className='flex sm:flex-row flex-col justify-center'>
                        {
                            MainLink.map((data, index) => (
                                <Link
                                    to={data.to}
                                    key={index}
                                >
                                    <button className={`md:text-xs text-[10px] font-medium md:p-3 text-white underline
                                                        border-[#487bbe] hover:bg-[#487bbe] transition duration-200
                                                        ${index === 0 ? "border-l-[0.1px] " : "border-l-[0.05px]"}
                                                        ${index === MainLink.length - 1 ? "border-r-[0.1px]" : "border-r-[0.05x]"}
                                                        `}
                                    >
                                        {data.title}
                                    </button>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;




