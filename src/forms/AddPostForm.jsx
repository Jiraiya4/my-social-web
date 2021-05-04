import { Field, reduxForm } from "redux-form";
import { TextArea } from "../components/common/FormsControls/FormsControls";
import { required, maxLengthCreator } from '../utils/validators/validators'

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name="newPostText" placeholder="Enter post text..." validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({ form: 'addPostForm' })(AddPostForm);