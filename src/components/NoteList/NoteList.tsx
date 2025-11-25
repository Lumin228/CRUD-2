import css from './NoteList.module.css'
import { Note } from '../../types/types'
import { deleteFunc } from '../../fetchFunc/fetchFunc';

interface NoteListProps {
    list: Note[];
    deleteNote: (id: string) => void;
}

function NoteList({ list, deleteNote }: NoteListProps) {

    const delteBut = (id: string) => {
        deleteNote(id);
    }

    return (
        <ul className={css.list}>
            {list.map((note) => (
                <li className={css.listItem} key={note.id}>
                    <h2 className={css.title}>{note.title}</h2>
                    <p className={css.content}>{note.content}</p>
                    <div className={css.footer}>
                        <span className={css.tag}>{note.tag}</span>
                        <button className={css.button} onClick={(e) => delteBut(e.target.id)} id={note.id}>Delete</button>
                    </div>
                </li>))}

        </ul>
    )
}

export default NoteList