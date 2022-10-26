import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Header.css'

const Header = () => {
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



                <ul className="menu menu-horizontal p-0">
                    <li> <Link to='/'>home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>

                    {user?.uid ? <button onClick={handleLogOut} className="btn btn-outline btn-success">Log Out</button> :
                        <>
                            <li><Link to='/login'>LogIn</Link> </li>
                            <li> <Link to='/register'>Register</Link> </li>
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