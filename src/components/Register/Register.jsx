import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="flex h-screen bg-gray-100">
                <div className="m-auto max-w-md w-full">
                    <div className="bg-white rounded-lg shadow-lg px-10 py-8">
                        <h1 className="text-3xl font-bold text-center mb-8">Create an account</h1>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">Your Name</label>
                                <input type="text" id="firstName" placeholder="John" className="w-full px-4 py-2 border rounded-md text-gray-700" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                <input type="email" id="email" placeholder="you@example.com" className="w-full px-4 py-2 border rounded-md text-gray-700" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                                <input type="password" id="password" placeholder="********" className="w-full px-4 py-2 border rounded-md text-gray-700" />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Photo URL</label>
                                <input type="text" id="PhotoUrl" placeholder="Photo Url" className="w-full px-4 py-2 border rounded-md text-gray-700" />
                            </div>
                            <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-200">Create Account</button>
                        </form>
                        <div className="mt-4 text-gray-700 text-center">
                            Already have an account? <Link className='text-blue-700 font-semibold ' to='/login'>Log in</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;