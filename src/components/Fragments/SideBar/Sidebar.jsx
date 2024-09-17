import React, { useState } from 'react';
import '../../../styles/sidebar.css';
import profile from "../../../assets/profile.webp"
import { BiLogoSlack } from 'react-icons/bi';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

const Sidebar = ({ children }) => {
    const [toggle, setToggle] = useState(true)

    const name = localStorage.getItem("name")

    return (
        <div className='sidebar'>
            <div className={`sidebar__container grid ${!toggle && "hidden-sidebar"}`}>
                <div className={`sidebar__main ${!toggle && "hidden-main"}`}>
                    <div className="sidebar__main-toggle" onClick={() => setToggle(!toggle)}>
                        <MdKeyboardDoubleArrowLeft className={`react-icons sidebar__main-toggle-icon ${!toggle ? "hidden-main-icon" : ""}`} />
                    </div>
                    <div className="sidebar__main-profile">
                        <i className={`sidebar__main-profile-icon ${!toggle && "hidden-profile-icon"}`}><BiLogoSlack className="react-icons  " /></i>
                        <span className={`sidebar__main-profile-title ${!toggle && "hidden-sidebar-profile"}`}>{name}.</span>
                    </div>
                </div>
                <div className="sidebar__content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Sidebar