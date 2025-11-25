import {  useDebouncedCallback } from 'use-debounce';
import css from './SearchBox.module.css'

interface SearchBoxProps {
    onType?: (topic: string) => void;
}

function SearchBox({onType}: SearchBoxProps){ 

    const debounced = useDebouncedCallback((v: string) => {onType(v)}, 1000);

    return (
        <input
            className={css.input}
            type="text"
            placeholder="Search notes"
            onChange={(e) => debounced(e.target.value)}
        />
    )
}


export default SearchBox