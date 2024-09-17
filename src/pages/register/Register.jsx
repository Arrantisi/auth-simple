import { Content, Massage } from "../../components/Fragments/Auth/AuthContainer"
import FormRegister from "../../components/Fragments/Auth/FormRegister"
import AuthLayout from "../../components/Layout/AuthLayout"

const Auth = () => {

    return (
        <>
            <AuthLayout >
                <Massage link={"/login"} toLink={"Login"} title={"Register"} subtitle={"Create your account here"}>
                    <FormRegister />
                </Massage>
                <Content />
            </AuthLayout>
        </>
    )
}

export default Auth