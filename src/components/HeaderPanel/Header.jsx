import { HomeIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { NavBar } from './NavBar/NavBar'

import styles from './Header.module.css';
export const Header = () => {
    const navigate = useNavigate();
    const { SectionsState } = useAppContext();

    const [ ActualTitle, setActualTitle ] = useState('');

    useEffect(() => {
        const activeSection = SectionsState.find((section) => section.active);

        // Only update the title if it's different
        if (activeSection?.title !== ActualTitle) {
            setActualTitle(activeSection ? activeSection.title : '');
        }
    }, [SectionsState, ActualTitle]);

    return (
        <header>
            <div className={styles['header-text']}>
                
                <HomeIcon
                    className={styles['header-home-icon']}
                    onClick={() => { navigate('/') }}/>

                <div className={styles['header-text']}> {
                    (ActualTitle === '')? '\u200B'
                    : ActualTitle }
                </div>
            </div> {
                (ActualTitle === '')? '\u200B'
                : <NavBar/> }
        </header>
    )
}