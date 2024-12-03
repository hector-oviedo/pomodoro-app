import { useState } from 'react';
import { SearchBar } from '../Utils/SearchBar/SearchBar';
import { SubsList } from './SubsList';

import styles from './SubPanel.module.css';
export const SubPanel = ({subId}) => {
    const [ NameFilter, setNameFilter ] = useState(''); 

    const handleSearch = (value) => {
        setNameFilter(value);
    } 
    return (
        <section className={styles['subs-container']}>
            <SearchBar onSearch={handleSearch}/>
            <SubsList subId={subId} filter={NameFilter} />
        </section>
    )
}