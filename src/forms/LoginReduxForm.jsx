import { reduxForm, Field } from 'redux-form'
import { Input } from '../components/common/FormsControls/FormsControls'
import { maxLengthCreator, required } from "../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required, maxLength10]}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
