import { LoginReduxForm } from "../../forms/LoginReduxForm";

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        LOGIN
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;