import React, { useState } from 'react'
import "./main.css"
import { FaAirbnb } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Main = () => {
    const [snackbar, setSnackbar] = useState(true)

    const toggleSnackbar = () => {
        setSnackbar(!snackbar);
        setTimeout(() => {
            setSnackbar(snackbar)
        }, 2000);
    }

    return (
        <div className='main'>
            <div className="main__container ">
                <h1 className="main__title ">pres to change the theme</h1>

                <Link to={"/login"} className='main__button button button--flex' onClick={() => { toggleSnackbar() }}>
                    Login<i className="main__button-icon button-icon"><FaAirbnb /></i>
                    <p className='main__tap'>tap</p>
                </Link>

            </div>
            <p className={`main__button-subtitle ${snackbar ? '' : ' show-button-subtitle'}`}>mode has been changed</p>
        </div>
    )
}

export default Main