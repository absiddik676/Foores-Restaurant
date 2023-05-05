/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
    const { loginUser,signInWithGoogle,signInWithGithub,forgetPassword } = useContext(AuthContext)
    const [error,setError] = useState('');
    const [email,setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from=location?.state?.from?.pathname || '/'


    const handleLogin = e => {
        e.preventDefault();
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setEmail(email)
        loginUser(email,password)
        .then(result =>{
            console.log(result.user);
            navigate(from,{replace:true}) 
            e.target.reset();

        })
        .catch(error =>{
            if (error.code === "auth/wrong-password") {
                setError("Invalid password. Please try again.");
            }
            else if(error.code === "auth/user-not-found"){
                setError('User not found. Please try again.')
            }
        })
    }


    const handleLoginWithGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate(from,{replace:true}) 
        })
        .catch(error =>{
            console.log(error);
        })
    }


    const handelLoginWithGithub = () =>{
        signInWithGithub()
        .then(result =>{
            console.log(result);
            navigate(from,{replace:true}) 
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handelResetPass = () =>{
        forgetPassword(email)
        .then(result =>{
            toast.success("Password reset link has been sent to your email")
        })
        .catch(error=>{
            console.log(error);
        })
    }

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
                        <p className='text-red-400 py-3'>{error}</p>
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary-darker border-0 border-none  text-white font-bold py-2 px-4 rounded-full w-full"
                        >
                            Sign in
                        </button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full" />
                    <p className='text-center'>forgot password , <Link onClick={handelResetPass} className='text-blue-700 font-semibold'>Reset Now</Link></p>
                    <p className="mt-2 text-center">
                        Don't have an account?{" "}
                        <Link className='text-blue-700 font-semibold' to='/register'>Sign up</Link>
                    </p>
                    <div className="text-center my-4">Or sign in with</div>
                    <div className="flex flex-col space-y-4">
                        <button onClick={handleLoginWithGoogle} className="bg-red-600 border-0 border-none  hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"><FaGoogle className="mr-2" /> Sign in with Google</button>
                        <button onClick={handelLoginWithGithub} className="bg-black border-0 border-none  hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"><FaGithub className="mr-2" /> Sign in with GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;