import React from 'react'
import "../../../styles/auth.css"
import Input from "../../Elements/Input"
import { Link, useNavigate } from 'react-router-dom'

const FormRegister = () => {
    const navigate = useNavigate()

    const toggleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if (!name) return alert("silahkan isi name nya dahulu!!!");
        const email = e.target.email.value;
        if (!email) return alert("silahkan isi email nya dahulu!!!");
        const password = e.target.password.value;
        if (!password) return alert("silahkan isi password nya dulu");
        const checkPassword = e.target.checkPassword.value;
        if (!checkPassword) return alert("checkPassword isi terlebih dahulu!!!")
        if (password !== checkPassword) return alert("masukkan check password yang sesuai dengan password yang anda tulis")

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        navigate("/login")
    }


    return (
        <form htmlFor="#" onSubmit={toggleSubmit} className="auth__form">
            <Input name={"name"} label={"Name"} placeholder={"name"} type={"text"} />
            <Input name={"email"} label={"Email"} placeholder={"example@gmail.com"} type={"email"} />
            <Input name={"password"} label={"Password"} placeholder={"*******"} type={"password"} />
            <Input name={"checkPassword"} label={"Check Password"} placeholder={"*******"} type={"password"} />
            <button type='submit' className=' button button--flex'>Register</button>
        </form>
    )
}

export default FormRegister