/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import ShowChefData from '../ShowChefData/ShowChefData';
import Spinner from '../../Spinner/Spinner';

const Chefs = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/chefs')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            }
            )
           
    }, [])
    console.log(loading);
    return (
        <div className='lg:mx-11 mx-5'>
            <h1 className='text-5xl text-center font-semibold mb-8'>Expert Chefs</h1>
            {loading ? (<><div className='mb-96'><Spinner /></div></>) :
                <div className='lg:grid grid-cols-3 gap-6 mt-7'>
                    {
                        data.map(chef => <ShowChefData key={chef.id} chef={chef}></ShowChefData>)
                    }
                </div>
            }
        </div>
    );
};

export default Chefs;