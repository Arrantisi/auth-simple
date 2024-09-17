import React from 'react'
import "../../../styles/auth.css"
import Input from "../../Elements/Input"
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {
    const navigate = useNavigate()

    const toggleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if (!name) return alert("silahkan isi name nya dahulu!!!");
        if (name !== localStorage.getItem("name")) return alert("nama anda tidak terdaftar silahkan register kan segera akun anda")
        const email = e.target.email.value;
        if (!email) return alert("silahkan isi email nya dahulu!!!");
        if (email !== localStorage.getItem("email")) return alert(`email tidak sesuai dengan email yang ada di akun ${localStorage.getItem("name")}`)
        const password = e.target.password.value;
        if (password !== localStorage.getItem("password")) return alert(`password tidak sesuai dengan password yang ada di akun ${localStorage.getItem("password")} `)
        if (!password) return alert("silahkan isi password nya dulu");


        localStorage.setItem("name", name);
        localStorage.setItem("email", email)
        localStorage.removeItem("password")

        navigate("/dashboard")
    }

    return (
        <form onSubmit={toggleSubmit} htmlFor="#" className="auth__form">
            <Input name={"name"} label={"Name"} placeholder={"name"} type={"text"} />
            <Input name={"email"} label={"Email"} placeholder={"example@gmail.com"} type={"email"} />
            <Input name={"password"} label={"Password"} placeholder={"*******"} type={"password"} />
            <button type='submit' className=' button button--flex'>Login</button>
        </form>
    )
}

export default FormLogin