import React from 'react'
import { BiLogoSlack } from 'react-icons/bi'
import { IoSunnyOutline } from 'react-icons/io5'
import { LuMoonStar } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { useTheme } from '../../../common/ColorTheme'

export const Content = () => {
    return (
        <div className="auth__content">
            <div className="auth__content-container">
                <h2 className="auth__content-title">
                    <BiLogoSlack className="react-icons" /> Booren Inc
                </h2>
                <p className="auth__content-subtitle">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi, dolores nesciunt totam."
                    <span className="auth__content-span">Ar Rantisi</span>
                </p>
            </div>
        </div>
    )
}

export const Massage = ({ link, toLink, title, subtitle, children }) => {
    const { toggleTheme, theme } = useTheme();

    const toggleLink = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    }

    return (
        <div className="auth__message">
            <div className="color-theme" onClick={() => toggleTheme()}>
                {theme !== 'light' ? <LuMoonStar className="react-icon color-theme-icon" /> : <IoSunnyOutline className="react-icon color-theme-icon" />}
            </div>
            <Link to={link} onClick={toggleLink} className="auth__enter">{toLink}</Link>
            <div className="auth__massage-container">
                <div className="auth__title">
                    <h2 className="auth__massage-title">{title}</h2>
                    <span className="section__massage-subtitle">{subtitle}</span>
                </div>
                {children}
                <div className="auth__form-massage">
                    By clicking continue, you agree to our <a className="auth__massage-span"> Terms of Service</a> and <a className="auth__massage-span">Privacy Policy</a>.
                </div>
            </div>
        </div>
    )
}