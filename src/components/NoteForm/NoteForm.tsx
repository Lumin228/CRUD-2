import { createPortal } from 'react-dom'
import css from './NoteForm.module.css'
import { Field, Form, Formik } from 'formik';

interface NoteFormProps {
    onClose: (value: boolean) => void;
    onCreate: (values: initialValues) => void;
}

interface initialValues {
    title: string;
    content: string;
    tag: string;
}


function NoteForm({onClose, onCreate}: NoteFormProps) {

    const createNote = (values: initialValues) => {
        console.log(values);
        onCreate(values);
        onClose(false);
    }
    
    return (
        <Formik initialValues={{title: '', content: '', tag: 'Todo'}} onSubmit={(value) => createNote(value)}>
        <Form className={css.form}>
            <div className={css.formGroup}>
                <label htmlFor="title">Title</label>
                <Field id="title" type="text" name="title" className={css.input} />
                <span name="title" className={css.error} />
            </div>

            <div className={css.formGroup}>
                <label htmlFor="content">Content</label>
                <Field
                    as="textarea"
                    id="content"
                    name="content"
                    rows={8}
                    className={css.textarea}
                />
                <span name="content" className={css.error} />
            </div>

            <div className={css.formGroup}>
                <label htmlFor="tag">Tag</label>
                <Field as="select" id="tag" name="tag" className={css.select}>
                    <option value="Todo">Todo</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Shopping">Shopping</option>
                </Field>
                <span name="tag" className={css.error} />
            </div>

            <div className={css.actions}>
                <button type="button" className={css.cancelButton} onClick={() => onClose(false)}>
                    Cancel
                </button>
                <button
                    type="submit"
                    className={css.submitButton}
                    disabled={false}
                >
                    Create note
                </button>
            </div>
            </Form>
        </Formik>
    )
}

export default NoteForm