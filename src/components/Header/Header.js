import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-200 p-4">
                <div className="flex-1">
                            <address  className="btn btn-ghost normal-case text-2xl">Web Quiz</address>
                        </div>
                        <div className="flex-none text-xl">
                            <ul className="menu menu-horizontal p-0">
                            <li><Link to='/home'>Home</Link></li>
                            <li>
                                <Link to='/statistics'>Statistics</Link>
                            </li>
                            <li><Link to='/blog'>Blog</Link></li>
                            </ul>
                 </div>
             </div>
        </div>
    );
};

export default Header;