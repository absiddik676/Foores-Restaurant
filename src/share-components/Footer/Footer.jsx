import React from 'react';
import { CiLocationOn, CiLocationArrow1 } from "react-icons/ci";
import { BsClock } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900  text-gray-200">
                <div className="container ml-4 mx-auto py-8 px-4">
                    <div className="grid lg:grid-cols-4 items-center">
                        <div className="w-full lg:full  lg:text-left mb-4 lg:mb-0">
                            <div className='flex items-center py-2'>
                                <CiLocationOn className='text-2xl' />
                                <h2 className="text-xl font-bold"> Address</h2>
                            </div>

                            <ul>
                                <li><a className="hover:text-gray-400 transition-colors duration-300">404-1058, Hirakata</a></li>
                                <li><a className="hover:text-gray-400 transition-colors duration-300"> Koshigaya-shi</a></li>
                            </ul>
                        </div>
                        <div className="w-full lg:full mb-4 lg:mb-0">
                            <div className='flex items-center py-2'>
                                <CiLocationArrow1 className='text-2xl' />
                                <h3 className="text-lg font-bold">Reservations</h3>
                            </div>
                            <ul className="mt-4">
                                <li><a className="hover:text-gray-400 transition-colors duration-300">
                                    +94 423-23-221</a></li>
                                <li><a className="hover:text-gray-400 transition-colors duration-300">reservations@Foores.com</a></li>

                            </ul>
                        </div>
                        <div className="w-full lg:w-full  mb-4 lg:mb-0 ">
                            <div className='flex items-center py-2'>
                                <BsClock className='text-2xl mr-1' />
                                <h3 className="text-lg font-bold">Opening Hours</h3>
                            </div>
                            <ul className="mt-4">
                                <li><a className="hover:text-gray-400 transition-colors duration-300">Mon - Sat: 10am - 11pm</a></li>
                                <li><a className="hover:text-gray-400 transition-colors duration-300">Sunday: Closed</a></li>

                            </ul>
                        </div>
                        <div className="w-full lg:w-full ">
                            <h3 className="text-lg font-bold">Keep in touch</h3>
                            <ul className="mt-4 flex items-center">
                                <input placeholder='Your Email' type="text" className='py-2 outline-none px-3 rounded-s-md bg-gray-700' />
                                <button className='bg-yellow-800 py-3 px-3 rounded-e-md'><FaArrowCircleRight /></button>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-gray-700 my-8" />
                    <p className="text-center">&copy;  Foores Restaurant. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;