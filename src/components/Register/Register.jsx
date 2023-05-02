import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleCreateAccount = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const PhotoUrl = form.PhotoUrl.value;
        console.log(name,email,password,PhotoUrl);

    }


    return (
            <div className="flex py-10 bg-gray-100 ">
                <div className="m-auto max-w-md w-full ">
                    <div className="bg-white rounded-lg shadow-lg px-10 py-8">
                        <h1 className="text-3xl font-bold text-center mb-8">Create an account</h1>
                        <form onSubmit={handleCreateAccount} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2"> Name</label>
                                <input name='name' type="text" id="name" placeholder="John" className="w-full px-4 py-2 border rounded-md text-gray-700" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                <input name='email' type="email" id="email" placeholder="you@example.com" className="w-full px-4 py-2 border rounded-md text-gray-700" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                                <input name='password' type="password" id="password" placeholder="********" className="w-full px-4 py-2 border rounded-md text-gray-700" />
                            </div>
                            <div>
                                <label htmlFor="PhotoUrl" className="block text-gray-700 font-bold mb-2">Photo URL</label>
                                <input name='PhotoUrl' type="text" id="PhotoUrl" placeholder="Photo Url" className="w-full px-4 py-2 border rounded-md text-gray-700" />
                            </div>
                            <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-200">Create Account</button>
                        </form>
                        <div className="mt-4 text-gray-700 text-center">
                            Already have an account? <Link className='text-blue-700 font-semibold ' to='/login'>Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Register;