import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import { AuthContext } from '../../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
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
        <div className='bg-hero bg-cover  bg-center bg-no-repeat'>
            <div className={`navbar ${currentLocation === '/'?'text-white' : 'text-black bg-slate-500'}  font-semibold text-lg`}>
                <div className="navbar-start ml-8">
                    <img src={logo} alt="" />
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                            <h1>ss</h1>
                            
                        </ul>

                    </div>
                  

                </div>
                <div className="navbar-end mr-10 ">
                    {/* <p>{user?.displayName}</p> */}
                    <ul className="menu menu-horizontal flex gap-7 px-1 items-center ml-9">
                        <Link>Home</Link>
                        <Link>Blog</Link>
                        {
                        user ? <button onClick={handleLogOut}>Log out</button> : <Link to='/login'> Login</Link>
                    }

                        {user && <img  data-tooltip-content={user?.displayName} data-tooltip-id="my-tooltip" className='w-10 h-10 rounded-full tooltip cursor-pointer' data-tip="error" src={user.photoURL} alt="" />}
                    </ul>
                </div>
                <Tooltip id="my-tooltip" />  
            </div>

        </div>
    );
};

export default Navbar;