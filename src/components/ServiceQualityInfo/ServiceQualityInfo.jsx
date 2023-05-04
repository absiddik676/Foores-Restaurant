import React from 'react';

const ServiceQualityInfo = () => {
    return (
        <div className='flex gap-5 mx-12 my-8'>
            <div className="flex justify-center">
                <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white transform hover:-translate-y-1 hover:shadow-xl transition-all duration-500 relative">
                    <img className=" object-cover pl-8" src="https://barakahit.net/html/brulee/assets/img/icons/features-icon-1.svg" alt="Card image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Premium Quality</div>
                        <p className="text-gray-700 text-base">This restaurant offers premium quality food, made with the freshest ingredients and expertly prepared for a luxurious and unforgettable dining experience.</p>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 transition-all duration-500 hover:w-8"></div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white transform hover:-translate-y-1 hover:shadow-xl transition-all duration-500 relative">
                    <img className=" object-cover pl-8" src="https://barakahit.net/html/brulee/assets/img/icons/features-icon-2.svg" alt="Card image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">100% ECO Ingredients</div>
                        <p className="text-gray-700 text-base">
                            This restaurant uses 100% eco ingredients for their dishes, ensuring a sustainable and healthy dining experience that is also kind to the environment.</p>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500  transition-all duration-500 hover:w-8"></div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white transform hover:-translate-y-1 hover:shadow-xl transition-all duration-500 relative">
                    <img className=" object-cover pl-8" src="https://barakahit.net/html/brulee/assets/img/icons/features-icon-3.svg" alt="Card image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Wood Burned Grill</div>
                        <p className="text-gray-700 text-base">This restaurant uses a wood-burning grill for their dishes, imparting a unique and delicious smoky flavor to their premium quality food.</p>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 transition-all duration-500 hover:w-8"></div>
                </div>
            </div>
        </div>
    );
};

export default ServiceQualityInfo;