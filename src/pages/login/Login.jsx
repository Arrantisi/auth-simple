import { Content, Massage } from "../../components/Fragments/Auth/AuthContainer"
import FormLogin from "../../components/Fragments/Auth/FormLogin"
import AuthLayout from "../../components/Layout/AuthLayout"

const Login = () => {

    return (
        <>
            <AuthLayout>
                <Content />
                <Massage link={"/register"} toLink={"Register"} title={"Login"} subtitle={"enter to your account"}>
                    <FormLogin />
                </Massage>
            </AuthLayout>
        </>
    )
}

export default Login