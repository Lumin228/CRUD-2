import { createPortal } from 'react-dom'
import css from './Modal.module.css'
import NoteForm from '../NoteForm/NoteForm'

interface ModalProps {
    onClose: (value: boolean) => void;
    onCreate: (values: {title: string; content: string; tag: string}) => void;
}


function Modal({onClose, onCreate}: ModalProps) {
    return createPortal(
        <div
            className={css.backdrop}
            role="dialog"
            aria-modal="true"
        >
            <div className={css.modal}>
                <NoteForm onClose={onClose} onCreate={onCreate}/>
            </div>
        </div>
        , document.body
    )
}

export default Modal