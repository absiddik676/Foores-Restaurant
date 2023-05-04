/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { BsFillHeartFill } from "react-icons/bs";
import { useLoaderData } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { toast } from 'react-hot-toast';

const ChefRecipes = () => {
    const data = useLoaderData()

    const { id, chefPicture, chefName, yearsOfExperience, likes, numberOfRecipes, short_bio, recipes
    } = data

    const [like, setLike] = useState(false);
    const [likesCount, setLikeCount] = useState(likes);
    const [buttonsDisabled, setButtonsDisabled] = useState({});

    const handleLike = () => {
        setLike(!like);
        if (like) {
            setLikeCount(likesCount - 1);
        } else {
            setLikeCount(likesCount + 1);
        }
    }

    const handleClick = (index,name) => {
        setButtonsDisabled({ ...buttonsDisabled, [index]: true });
        toast.success(`${name} added your favorite list`)

    }
    

    return (
        <div className='mx-10  mt-10'>

            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mx-auto w-full">
                <div className="md:w-1/3 relative">
                    <img className="w-full h-auto object-cover object-center" src={chefPicture} alt="Chef" />
                    <div className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-bl-lg">{yearsOfExperience} year Experience</div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-between p-6">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">{chefName}</h2>
                        <p className="text-gray-700 text-base leading-relaxed mb-4">{short_bio}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-400 text-sm">Likes: {likesCount}</p>
                            <p className="text-gray-400 text-sm">Number of Recipes: {numberOfRecipes}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className="text-gray-400 text-md">{like ? 'Dislike' : 'Like'} </p>
                            {
                                like ? <AiFillLike type='btn' disabled={buttonsDisabled[id]} onClick={handleLike} className='text-2xl cursor-pointer text-blue-600' /> : <AiOutlineLike onClick={handleLike} className='text-2xl cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='text-3xl text-center font-semibold py-10'>{chefName}, 3 best Food</h1>


            <table className="min-w-full divide-y mb-14 table-auto divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipe Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingredients</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cooking Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Favorite</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {recipes.map((recipe, index) => (
                        <tr key={index} className={(index % 2 === 0) ? "bg-gray-50" : ""}>
                            <td className="lg:px-6 lg:py-4 ">
                                <div className="text-sm font-medium text-gray-900">{recipe.name}</div>
                            </td>
                            <td className="lg:px-6 lg:py-4 ">
                                <div className="text-sm font-medium text-gray-900">{recipe.ingredients.join(", ")}</div>
                            </td>
                            <td className="lg:px-6 lg:py-4 ">
                                <div className="text-sm font-medium text-gray-900">{recipe.cooking_method}</div>
                            </td>
                            <td className="lg:px-6 lg:py-4 ">
                                <div className="text-sm font-medium text-gray-900">{recipe.rating}</div>
                            </td>
                            <td className="lg:px-6  lg:py-4 ">
                                {/* <AiOutlineHeart onClick={()=>handleFavorite(recipe.name,recipe.id)} className='text-2xl ml-3 cursor-pointer' /> */}
                                <button disabled={buttonsDisabled[index]}
                                    onClick={() => handleClick(index,recipe.name)}
                                    className={`${buttonsDisabled[index] ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{buttonsDisabled[index] ? <FcLike className='text-2xl' /> : <AiOutlineHeart className='text-2xl' />}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChefRecipes;