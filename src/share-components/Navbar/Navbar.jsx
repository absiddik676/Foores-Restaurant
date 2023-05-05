import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import { AuthContext } from '../../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import ActiveRoute from '../../routes/ActiveRoute/Activeroute';
const Navbar = () => {
    const location = useLocation()
    const {user,logOut} = useContext(AuthContext)
    const currentLocation = location.pathname;

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='bg-hero bg-cover bg-center bg-no-repeat'>
            <div className={`navbar ${currentLocation === '/'?'text-white' : 'lg:text-black text-white bg-slate-500'} ml-0 mx-5 min-h-0 w-12/12 font-semibold text-lg`}>
                <div className="navbar-start ">
                    <img src={logo} alt="" />
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost ml-32 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        <ActiveRoute to='/'>Home</ActiveRoute>
                        <ActiveRoute className="py-2 lg:py-0" to='/blog'>Blog</ActiveRoute>
                        {
                        user ? <button className='text-start mb-2' onClick={handleLogOut}>Log out</button> : <ActiveRoute to='/login'>Login</ActiveRoute>
                    }

                        {user && <Link to='/profile'><img  data-tooltip-content={user?.displayName} data-tooltip-id="my-tooltip" className='w-10 h-10 rounded-full tooltip cursor-pointer' data-tip="error" src={user.photoURL} alt="" /></Link>}
                        </ul>

                    </div>
                  

                </div>
                <div className="navbar-end  text-end mr-10 lg:block hidden">
                    {/* <p>{user?.displayName}</p> */}
                    <ul className="menu menu-horizontal  gap-7 px-1 items-center ">
                        <ActiveRoute to='/'>Home</ActiveRoute>
                        <ActiveRoute to='/blog'>Blog</ActiveRoute>
                        <ActiveRoute to='/about'>About</ActiveRoute>
                        {
                        user ? <button className='outline-none border-none ' onClick={handleLogOut}>Log out</button> : <ActiveRoute to='/login'>Login</ActiveRoute>
                    }

                        {user && <Link to='/profile'><img  data-tooltip-content={user?.displayName} data-tooltip-id="my-tooltip" className='w-10 h-10 rounded-full tooltip cursor-pointer' data-tip="error" src={user.photoURL} alt="" /></Link>}
                    </ul>
                </div>
                <Tooltip id="my-tooltip" />  
            </div>

        </div>
    );
};

export default Navbar;