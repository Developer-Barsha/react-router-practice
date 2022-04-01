import React from 'react';
import { MenuIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="text-xl bg-purple-500 flex justify-between px-20 py-3">
            <h1 className='flex gap-5'><MenuIcon className='h-7 w-7'></MenuIcon>Hello Welcome</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/resturant'>Resturant</Link>
            </nav>
        </div>
    );
};

export default Header;