import { DocumentPlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../Utils/SearchBar/SearchBar';
import { SubsList } from './SubsList';

import styles from './SubPanel.module.css';
export const SubPanel = ({subId, navigation}) => {
    const navigate = useNavigate();
    const [ NameFilter, setNameFilter ] = useState(''); 

    const handleSearch = (value) => {
        setNameFilter(value);
    }
    
    const onClickAddHandle = (e, navigation) => {
        e.preventDefault();
        const path = `/${navigation}/create`;
        navigate(path)
    }
    return (
        <section className={styles['subs-container']}>
            <div className={styles['bar-row']}>

                <div className={styles['bar-search']}>
                    <SearchBar onSearch={handleSearch}/>
                </div>

                <div className={styles['bar-button']}>
                    <div className={styles['sub-button-container']}>
                        <button className={styles['sub-button']} onClick={(e) => onClickAddHandle(e, navigation)}>
                            <DocumentPlusIcon className={styles['sub-button-icon']}/>
                        </button>
                    </div>
                </div>

            </div>

            <SubsList subId={subId} filter={NameFilter} />
        </section>
    )
}