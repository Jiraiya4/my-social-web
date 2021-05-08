import { Redirect } from "react-router-dom";
import { LoginReduxForm } from "../../forms/LoginReduxForm";

const Login = (props) => {
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        LOGIN
        <LoginReduxForm onSubmit={props.onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

export default Login;