import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import styles from './SearchBar.module.css';
export const SearchBar = ({ onSearch }) => {
    const [ Value, setValue ]  = useState('');

    const onHandleChange = ({ target }) => {
        setValue(target.value);
        onSearch(target.value);
    }
    return (
        <div className={styles['search-bar']}>
            <input
                type="text"
                className={styles['search-input']}
                placeholder="Search Project"
                value={Value}
                onChange={onHandleChange}
            />
            <MagnifyingGlassIcon className={styles['search-icon']} />
        </div>
    )
}