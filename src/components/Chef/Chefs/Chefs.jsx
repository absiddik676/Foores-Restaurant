/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import ShowChefData from '../ShowChefData/ShowChefData';

const Chefs = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/chefs')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);
    return (
        <div className='mx-11'>
            <h1 className='text-5xl text-center font-semibold'>Our best chef's</h1>
            <div className='grid grid-cols-3 gap-6 mt-7'>
                {
                    data.map(chef => <ShowChefData key={chef.id} chef={chef}></ShowChefData>)
                }
            </div>
        </div>
    );
};

export default Chefs;