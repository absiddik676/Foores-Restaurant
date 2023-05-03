/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
    const { createUser } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }
    console.log(createUser);

    return (
        <div>
            <div className="flex py-10 bg-gray-100">
                <div className="w-full max-w-md m-auto bg-white rounded-lg border border-gray-300 shadow-default py-10 px-16">
                    <h1 className="text-2xl font-medium text-primary mt-4 mb-8 text-center">
                        Welcome back!
                    </h1>
                    <form onSubmit={handleLogin}>
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
                                name='email'
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
                                name='password'
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
                    <div className="text-center my-4">Or sign in with</div>
                    <div className="flex flex-col space-y-4">
                        <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"><FaGoogle className="mr-2" /> Sign in with Google</button>
                        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"><FaGithub className="mr-2" /> Sign in with GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;