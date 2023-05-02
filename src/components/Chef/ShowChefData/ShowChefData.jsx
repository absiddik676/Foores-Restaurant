/* eslint-disable react/prop-types */
import React from 'react';

const ShowChefData = ({ chef }) => {
    console.log(chef);
    const { chefPicture, chefName, yearsOfExperience, likes ,numberOfRecipes} = chef;
    return (
        <div>
            <div className="w-full max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={chefPicture} alt="Chef Image" />
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-xl">{chefName}</h2>
                        <span className="bg-green-500 text-white py-1 px-2 rounded-full text-sm">{yearsOfExperience} years experience</span>
                    </div>
                    <p className="mt-3 text-gray-600"></p>
                    <div className="flex justify-end mt-4">
                        <p>Total Recipes</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowChefData;