import React from 'react'
import "../../styles/auth.css"

const Input = ({ name, label, type, placeholder }) => {
    return (
        <div className="auth__form-content">
            < label htmlFor={name} className="auth__label" >{label}</ label>
            <input type={type} name={name} placeholder={placeholder} className="auht__input" />
        </div >
    )
}

export default Input