import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import NavProfile from '../pages/Auth/NavProfile';
import ThemeToggle from '../context/ThemeToggle';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import logo from '../assets/book-svgrepo-com.svg'


const Navbar = () => {
    const { user, loading, signOutUser } = useAuth()

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/find-tutors' end>Find Tutors</NavLink></li>
        <li><NavLink to='/aboutUs' end>About Us</NavLink></li>
        {user && <>
            <li><NavLink to='/add-tutorials'>Add Tutorials</NavLink></li>
            <li><NavLink to='/my-tutorials'>My Tutorials</NavLink></li>
            <li><NavLink to='/my-books'>My Booked Tutors</NavLink></li>
        </>}
    </>

    return (
        <div>
            <div className=' shadow-md glass bg-[#F7F8F4]  dark:text-white dark:bg-dark-background'>
                <div className="navbar container mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn p-0  btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={logo} className='w-12 h-12' alt="" />
                            <Link to={'/'} className="font-bold text-sm md:text-3xl">SpeakEasy</Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            {links}
                        </ul>
                    </div>

                    {/* <div className="text-3xl navbar-end">{wishTest}</div> */}
                    <div className="navbar-end gap-2">
                        <ThemeToggle></ThemeToggle>
                        <div className='flex justify-center items-center'>
                            {
                                user ?
                                    <>
                                        <Tooltip className="z-50" id="my-tooltip" />
                                        <NavProfile
                                            user={user}
                                            signOutUser={signOutUser}
                                            loading={loading}>
                                        </NavProfile>
                                    </>
                                    :
                                    <div>
                                        {
                                            loading ? <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div> : <Link to='/signIn'>Sign In</Link>
                                        }

                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;