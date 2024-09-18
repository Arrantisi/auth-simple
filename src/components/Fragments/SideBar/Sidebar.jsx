import React, { useState } from 'react';
import '../../../styles/sidebar.css';
import profile from "../../../assets/profile.webp"
import { BiLogoSlack } from 'react-icons/bi';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { sidebarMenu, sidebarSet } from '../../../data/menus';
import { SlArrowDown } from 'react-icons/sl';
import { AiOutlineSetting } from 'react-icons/ai';

const Sidebar = ({ children }) => {
    const [toggle, setToggle] = useState(true)
    const [submenuOpen, setSubmenuOpen] = useState(false)

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
                    <div className='sidebar__menu-container'>
                        <ul className={`sidebar__menu ${!toggle && "hidden-menu"}`}>
                            {sidebarMenu.map((menu, index) => (
                                <li key={index} className={`sidebar__menu-list ${menu.spacing && "spacing"} `}>
                                    <div className={`sidebar__menu-main ${!toggle && "menu-sidebar-menu"}`}>
                                        <div className='sidebar__menu-content'>
                                            <i className='sidebar__menu-icon react-icons'>{menu.icon}</i>
                                            <span className={`sidebar__menu-title  ${!toggle && "hidden-sidebar-list"}`}>{menu.title}</span>
                                        </div>

                                        {menu.submenu && toggle && (
                                            <i className="sidebar__submenu-icon react-icons" onClick={() => setSubmenuOpen(!submenuOpen)}><SlArrowDown className={!submenuOpen ? "" : "open-submenu-icon"} /></i>
                                        )}
                                    </div>
                                    {menu.submenu && submenuOpen && toggle && (
                                        <ul className="sidebar__submenu">
                                            {menu.submenuItems.map((menu, index) => (
                                                <li key={index} className='sidebar__submenu-item'>
                                                    {menu.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <ul className={`sidebar__setting ${!toggle && "hidden-menu"}`}>
                            {sidebarSet.map((menu, index) => (
                                <li key={index} className={`sidebar__setting-list background-sidebar-setting-${index} `}>
                                    <i className="sidebar__menu-icon react-icons">{menu.icon}</i>
                                    <span className={`sidebar__menu-title ${!toggle && "hidden-sidebar-list"}`}>{menu.title}</span>
                                </li>
                            ))}
                        </ul>
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