import { CalendarIcon, ClipboardDocumentListIcon, DocumentPlusIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';

import styles from './Home.module.css';
export const Home = () => {
    const { SubsState, getSectionPath } = useAppContext();

    const navItems = [
        {
            id: 'DAYS',
            icon: <CalendarIcon className={styles['home-icon']}/>,
            title: 'Tasks',
            description: 'View and manage tasks by days.',
            path: getSectionPath('DAYS'),
        },
        {
            id: 'TASK_CREATE',
            icon: <DocumentPlusIcon className={styles['home-icon']}/>,
            title: 'Create Task',
            description: 'Create new tasks to track your activities.',
            path: getSectionPath('TASK_CREATE'),
        },
        ...SubsState.map((sub) => ({
            id: sub.id,
            icon: <ClipboardDocumentListIcon className={styles['home-icon']}/>,
            title: sub.navLabel,
            description: `Manage and view all ${sub.navLabel.toLowerCase()} entries.`,
            path: `/${sub.navigation}`,
        })),
        ...SubsState.map((sub) => ({
            id: `${sub.id}-create`,
            icon: <DocumentPlusIcon className={styles['home-icon']}/>,
            title: `Manage ${sub.navLabel}`,
            description: `Add, remove and see entries to ${sub.navLabel.toLowerCase()}.`,
            path: `/${sub.navigation}/create`,
        })),
    ];

    return (
        <div className={styles['home-container']}>
            <div className={styles['home-grid']}>
                {navItems.map((item) => (
                    <Link key={item.id} to={item.path} className={styles['home-item']}>
                        {item.icon}
                        <div className={styles['home-content']}>
                            <h2 className={styles['home-item-title']}>{item.title}</h2>
                            <p className={styles['home-item-description']}>{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};