import { MinusCircleIcon, InformationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

import styles from './TaskStateIcon.module.css';
export const TaskStateIcon = ({ state }) => {
    const getLabel = () => {
        switch (state) {
            case 'completed':
                return 'Finished!';
            case 'progress':
                return 'In Progress';
            default:
                return 'Not Started';
        }
    }
    const renderIcon = () => {
        switch (state) {
            case 'progress':
                return <InformationCircleIcon className={styles['status-icon-progress']} />;
            case 'completed':
                return <CheckCircleIcon className={styles['status-icon-completed']} />;
            default:
                return <MinusCircleIcon className={styles['status-icon-empty']} />;
        }
    };

    return (
        <div className={styles['status-icon']}>
            { renderIcon() } &nbsp; { getLabel() }
        </div>
    )
};