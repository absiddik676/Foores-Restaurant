/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LoginPage = () => {
    const handleSubmit = () =>{

    }
    return (
        <div>
            <div className="flex h-screen bg-gray-200">
                <div className="w-full max-w-md m-auto bg-white rounded-lg border border-gray-300 shadow-default py-10 px-16">
                    <h1 className="text-2xl font-medium text-primary mt-4 mb-8 text-center">
                        Welcome back!
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="border rounded-md py-2 px-3 text-gray-700 w-full"
                                id="email"
                                placeholder="you@example.com"
                                
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="border rounded-md py-2 px-3 text-gray-700 w-full"
                                id="password"
                                placeholder="********"
                                
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary-darker text-white font-bold py-2 px-4 rounded-full w-full"
                        >
                            Sign in
                        </button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full" />
                    <p className="mt-8">
                        Don't have an account?{" "}
                        <Link className='text-blue-700 font-semibold' to='/register'>Sign up</Link>  
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;