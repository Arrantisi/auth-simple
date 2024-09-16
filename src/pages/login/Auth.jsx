import { BiLogoSlack } from "react-icons/bi"
import "./auth.css"
import { LuMoonStar } from "react-icons/lu"
import { useTheme } from "../../common/ColorTheme"
import { IoSunnyOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const Auth = () => {
    const { toggleTheme, theme } = useTheme()

    return (
        <section className="section__auth">
            <div className="auth__container">

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

                <div className="auth__message">
                    <div className="color-theme" onClick={() => toggleTheme()}>
                        {theme !== 'light' ? <LuMoonStar className="react-icon color-theme-icon" /> : <IoSunnyOutline className="react-icon color-theme-icon" />}
                    </div>
                    <Link to={"/register"} className="auth__enter">Register</Link>
                    <div className="auth__massage-container">
                        <div className="auth__title">
                            <h2 className="auth__massage-title">Login to account</h2>
                            <span className="section__massage-subtitle">Enter your email below to create your account</span>
                        </div>
                        <form htmlFor="#" className="auth__form">
                            <div className="auth__form-content">
                                <label htmlFor="name" className="auth__label">Name</label>
                                <input type="text" name="name" placeholder="name" className="auht__input" />
                            </div>
                            <div className="auth__form-content">
                                <label htmlFor="name" className="auth__label">Email</label>
                                <input type="email" name="email" placeholder="example@gmail.com" className="auht__input" />
                            </div>
                            <div className="auth__form-content">
                                <label htmlFor="name" className="auth__label">Password</label>
                                <input type="password" name="password" placeholder="******" className="auht__input" />
                            </div>
                            <button type="submit" className="auth__submit button button-flex">
                                sign in
                            </button>
                        </form>
                        <div className="auth__form-massage">
                            By clicking continue, you agree to our <a className="auth__massage-span"> Terms of Service</a> and <a className="auth__massage-span">Privacy Policy</a>.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Auth