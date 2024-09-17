import React from 'react'
import "../../../styles/auth.css"
import Input from "../../Elements/Input"

const FormRegister = () => {
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

        const baseUrl = import.meta.env.BASE_URL.replace(/\/+$/, ''); // Hapus trailing slash
        const loginUrl = `${baseUrl}/login`; // Tambahkan slash sebelum 'login'
        window.location.href = loginUrl;
    }


    return (
        <form htmlFor="#" onSubmit={toggleSubmit} className="auth__form">
            <Input name={"name"} label={"Name"} placeholder={"name"} type={"text"} />
            <Input name={"email"} label={"Email"} placeholder={"example@gmail.com"} type={"email"} />
            <Input name={"password"} label={"Password"} placeholder={"*******"} type={"password"} />
            <Input name={"checkPassword"} label={"Check Password"} placeholder={"*******"} type={"password"} />
            <button type='submit' className=' button button--flex'>Login</button>
        </form>
    )
}

export default FormRegister