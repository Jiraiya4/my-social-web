import { Field, reduxForm } from "redux-form";
import { TextArea } from "../components/common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name="newMessageBody" placeholder="Enter your message" validate={[required, maxLength30]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm({ form: 'addMessage' })(AddMessageForm);