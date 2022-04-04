import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className=" mt-14">
                <Link to="/" className="text-3xl font-bold mr-8 text-sky-400 hover:underline">HOME</Link>
                <Link to="/reviews"  className="text-3xl font-bold mr-8 text-sky-400 hover:underline">REVIEWS</Link>
                <Link to="/dashboard"  className="text-3xl font-bold mr-8 text-sky-400 hover:underline">DASHBOARD</Link>
                <Link to="/blogs"  className="text-3xl font-bold mr-8 text-sky-400 hover:underline">BLOGS</Link>
                <Link to="/about"  className="text-3xl font-bold mr-8 text-sky-400 hover:underline">ABOUT</Link>
            </div>
    );
};

export default Header;