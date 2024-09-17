import React from 'react'

const AuthLayout = ({ children }) => {

    return (
        <section className="section__auth">
            <div className="auth__container">
                {children}
            </div>
        </section>
    )
}

export default AuthLayout