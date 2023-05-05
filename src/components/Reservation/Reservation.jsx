import React from 'react';
import banner from '../../assets/img/banner-bg.jpg'

const Reservation = () => {
    return (
        <div className='my-11'>
            <div className="bg-cover bg-center bg-no-repeat relative py-64 lg:py-0" style={{ backgroundImage: `url(${banner}) `, height: '400px' }}>
                <div style={{}} className="absolute inset-0 bg-black opacity-70"></div>
                <div className="absolute inset-0 text-center ">
                    <div >
                        <h1 className='font-Italianno text-5xl text-orange-500'>Book A Table</h1>
                        <h1 className='text-6xl text-white mb-11'>Make a Reservation</h1>
                        <div className='lg:flex justify-center gap-6 '>
                            <select className="select border border-white bg-transparent text-white w-full max-w-xs">
                                <option disabled selected>Party size</option>
                                <option className='text-black'>1 Person</option>
                                <option className='text-black'>2 Person</option>
                                <option className='text-black'>3 Person</option>
                                <option className='text-black'>4 Person</option>
                                <option className='text-black'>5 Person</option>
                            </select>
                            <select className="select border border-white bg-transparent lg:my-0 my-5 text-white w-full max-w-xs">
                                <option disabled selected>Time</option>
                                <option className='text-black'>04.00 pm</option>
                                <option className='text-black'>05.00 pm</option>
                                <option className='text-black'>06.00 pm</option>
                                <option className='text-black'>07.00 pm</option>
                                <option className='text-black'>08.00 pm</option>
                            </select>
                            <input
                                type="date"
                                className="border bg-transparent border-white text-white rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full max-w-xs"
                                name={name}
                                
                               
                            />

                            <button className='px-4 mt-5 lg:mt-0 border-none rounded-lg py-3 shrink-0 text-white font-semibold bg-orange-500'>Book A Table</button>
                        </div>



                    </div>

                </div>
            </div>
        </div >
    );
};

export default Reservation;