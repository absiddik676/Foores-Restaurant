import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const { createUser, updateNameAndPhoto,signInWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleCreateAccount = e => {
        e.preventDefault();
        setError('')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        let PhotoUrl = form.PhotoUrl.value;

        if (password.length === 0 || email.length === 0) {
            setError("Please Enter Your Email and Password");
            return
        }
        else if (password.length < 6) {
            setError('password must have character');
            return
        }

        if(PhotoUrl.length === 0){
            PhotoUrl = 'https://picsum.photos/200/300'
        }
        console.log(password.length);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateNameAndPhoto(name, PhotoUrl);
                e.target.reset();
                
            })
            .catch(error => {
                console.log(error);
                if(error.code === "auth/email-already-in-use"){
                    setError('Email already in use')
                }
            })
        console.log(name, email, password, PhotoUrl);

    }

    const handleLoginWithGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
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
                        <p className='text-red-400'>{error}</p>
                        Already have an account? <Link className='text-blue-700 font-semibold ' to='/login'>Log in</Link>
                    </div>
                    <hr className="my-6 border-gray-300 w-full" />
                    <div className="text-center my-4">Or sign in with</div>
                    <div className="flex flex-col space-y-4">
                        <button onClick={handleLoginWithGoogle} className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"><FaGoogle className="mr-2" /> Sign in with Google</button>
                        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"><FaGithub className="mr-2" /> Sign in with GitHub</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;