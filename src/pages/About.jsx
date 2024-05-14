import React from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import ARC from '../assets/files/arc.jpeg'
import TracyCity from '../assets/files/city.jpeg'
import Seller from '../assets/files/seller.jpeg'
import Uplift from '../assets/files/uplift.jpeg'
import ARCFile from '../assets/files/ARC.pdf'
import TracyCityFile from '../assets/files/Tracy.pdf'
import SellerFile from '../assets/files/seller.pdf'
import UpliftFile from '../assets/files/Uplift.pdf'
import { BiSolidShow } from "react-icons/bi";
import { Link } from 'react-router-dom'
import Logo from '../assets/logos/logo.png'
// import  Header from '../components/Header'

const About = () => {
    return (
        <div className=''>
            {/* <Header /> */}
            <div className='about-hero min-h-[calc(100vh-60px)] w-[100%] md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden'>
                <Link to="/" className="cursor-pointer">
                    <img
                        src={Logo}
                        alt="logo"
                        className='md:w-[200px] md:h-[200px] sm:w-[150px] w-[120px] object-fill -ml-6 mt-2'
                    />
                </Link>
            </div>
            <div className='sm:w-[calc(100%-18%)] sm:mx-auto mt-[3rem] sm:px-0 px-5'>
                <h2 className='sm:text-7xl text-3xl text-neutral-900 font-semibold drop-shadow-md shadow-[#000]'>What is Jetsetters ?</h2>
                <div className='sm:text-xl text-base leading-4 sm:leading-[20px] mt-5 text-neutral-700 md:text-start flex flex-col gap-2'>
                    <p>
                        Welcome to Jetsetters, your premier destination for seamless travel experiences since 2023. At Jetsetters,
                        we believe that travel should be an adventure, not a hassle. From airline ticketing to cruise bookings and hotel
                        reservations, we've got you covered every step of the way.
                    </p>
                    <p>
                        Founded in 2023, Jetsetters was born out of a passion for exploration and a commitment to delivering unparalleled service
                        to our customers. With a team of travel experts dedicated to crafting personalized itineraries and ensuring smooth journeys,
                        we strive to make every trip a memorable one.
                    </p>
                    <p>
                        As avid travelers ourselves, we understand the importance of attention to detail and flexibility when it comes to planning your travels.
                        Whether you're embarking on a solo adventure, a romantic getaway, or a family vacation, we're here to turn your dream trip into a reality.
                    </p>
                    <p>
                        With access to a vast network of airlines, cruise lines, and accommodations worldwide, we pride ourselves on offering competitive prices without
                        compromising on quality. Our goal is to provide you with options that suit your preferences and budget, ensuring that you get the most out of your
                        travel experience.
                    </p>
                    <p>
                        At Jetsetters, we value transparency, reliability, and above all, customer satisfaction. Your journey begins the moment you reach out to us, and we're
                        committed to providing unparalleled support every step of the way. Let us take the stress out of travel planning so you can focus on making memories that
                        last a lifetime.
                    </p>
                    <p>
                        Join us on your next adventure and discover why Jetsetters is the ultimate choice for all your travel needs. Wherever you go, we'll be there to make sure you
                        travel in style, comfort, and with peace of mind.
                    </p>
                </div>
            </div>

            <div className='bg-[#00000005]'>
                <div className='sm:w-[calc(100%-18%)] sm:mx-auto mt-[3rem] sm:px-0 px-5'>
                    <h2 className='sm:text-5xl text-3xl text-neutral-900 font-semibold drop-shadow-md shadow-[#000] pt-5'>
                        Our Ceritificates & License
                    </h2>
                    <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-10 ms:mt-[2rem] mt-[1rem]'>
                        <ImageLayout
                            image={ARC}
                            title={"ARC"}
                            to={ARCFile}
                        />
                        <ImageLayout
                            image={TracyCity}
                            title={"Tracy City"}
                            to={TracyCityFile}
                        />
                        <ImageLayout
                            image={Seller}
                            title={"Seller"}
                            to={SellerFile}
                        />
                        <ImageLayout
                            image={Uplift}
                            title={"Uplift"}
                            to={UpliftFile}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WrapperLayout("", "")(About);


const ImageLayout = ({ image, title, to }) => {
    return (
        <div className='relative z-[1] shadow-xl shadow-[#00000049] lg:w-[550px] md:w-[350px] sm:w-[270px] w-full h-[350px] rounded-lg sm:mt-0 mt-5 cursor-pointer'>
            <img
                src={image}
                alt={title}
                className='w-full h-[95%] object-fill rounded-t-lg z-[10]'
            />

            <Link
                to={to}
                target="_blank"
                className="absolute z-[100] top-2 right-1 shadow-sm shadow-[#4c6cb145] bg-[#1e242c18] rounded-[50px] p-[2px] hover:bg-[#4d88d650] transition duration-200 group"
            >
                <BiSolidShow
                    className='text-[35px] text-[#515d704b] group-hover:text-[#3a7be2] transition duration-200'
                />
            </Link>
            {/* <h2 className='text-xl font-semibold mt-5'>{title}</h2> */}
        </div>
    )
}