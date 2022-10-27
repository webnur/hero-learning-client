import React, { useContext } from 'react';
import { useState } from 'react';
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className="navbar bg-base-400">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Hero Learning</Link>
            </div>
            <div className="flex-none">

                <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden mr-4">
                    {
                        open ?
                            <FaTimesCircle></FaTimesCircle>
                            :
                            <FaBars></FaBars>
                    }
                </div>


                <ul className={`md:flex md:justify-center items-center md:static absolute duration-500 ease-in z-[100] w-2/5 ${open ? 'top-[66px]' : 'top-[-250px]'}`}>

                    <li> <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium' to='/'>home</Link></li>
                    <li><Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium' to='/courses'>Courses</Link></li>
                    <li><Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium' to='/blogs'>Blogs</Link></li>


                    {user?.uid ?
                        <li onClick={handleLogOut} className="btn btn-primary ml-2">Log Out</li>
                        :
                        <>
                            <li><Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium' to='/login'>LogIn</Link> </li>
                            <li> <Link className='block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium' to='/register'>Register</Link> </li>
                        </>}


                </ul>
            </div>

            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />


                </div>
            </div>
        </div>
    );
};

export default Header;