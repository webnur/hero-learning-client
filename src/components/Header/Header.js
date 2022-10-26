import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div><h2>Hero Learning</h2></div>
            <div className='navbar'>
                <Link to='/'>home</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/login'>LogIn</Link> 
                <Link to='/register'>Register</Link> 
            </div>
        </div>
    );
};

export default Header;