/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { BsFillHeartFill } from "react-icons/bs";
import { useLoaderData } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";

const chefRecipes = () => {
    const data = useLoaderData()
    console.log(data);
    const { chefPicture, chefName, yearsOfExperience, likes, numberOfRecipes, short_bio } = data
    return (
        <div className='mx-10 h-screen mt-10'>

            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mx-auto w-full">
                <div className="md:w-1/3 relative">
                    <img className="w-full h-auto object-cover object-center" src={chefPicture} alt="Chef" />
                    <div className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-bl-lg">{yearsOfExperience} Experience</div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-between p-6">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">{chefName}</h2>
                        <p className="text-gray-700 text-base leading-relaxed mb-4">{short_bio}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-400 text-sm">Likes: {likes}</p>
                            <p className="text-gray-400 text-sm">Number of Recipes: {numberOfRecipes}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                        <p className="text-gray-400 text-sm">Add To Favorite </p>
                        <AiOutlineHeart className='text-2xl'/>
                        </div>
                    </div> 
                </div> 
            </div>

        </div>
    );
};

export default chefRecipes;