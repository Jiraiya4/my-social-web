import { reduxForm, Field, createField } from 'redux-form'
import { Input } from '../components/common/FormsControls/FormsControls'
import { maxLengthCreator, required } from "../utils/validators/validators";
import styles from "../components/common/FormsControls/FormsControls.module.css"

const maxLength10 = maxLengthCreator(35);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={Input} validate={[required, maxLength10]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength10]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required, maxLength10]} /> remember me
            </div>

            {props.captchaUrl && <img src={props.captchaUrl} width='150' height='200'/>}
            {props.captchaUrl && <Field placeholder={"Symbols from image"} name={"captcha"} component={Input} validate={[required]}/>}

            {props.error && <div className={styles.formSummuryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
