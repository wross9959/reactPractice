
import React from 'react';
import { FaSearch, FaBell, FaUserCircle, FaEnvelope  } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

function HeaderBar(){


    return(
        <div className="header">
            <h1 className="header-title">Dashboard</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <FaSearch />
            </div>
            <div className="language-selector">
                <span>EN</span>
                    <IoIosArrowDown />
            </div>
            <div className="notifications">
                <FaEnvelope />
                <FaBell />
            </div>
            <div className="user-profile">
                <FaUserCircle />
                <span>Will Ross</span>
                <span className="user-role">Admin</span>
                <IoIosArrowDown />
            </div>
        </div>
    );
}

export default HeaderBar