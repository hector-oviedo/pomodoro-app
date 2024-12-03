import {convertSecondsToVisual, convertTimeToVisual } from '../../../helpers/formatFields';

import styles from './Session.module.css';
export const Session = ({session}) => {

    return (
        <div
            className={`${styles['session-container']}`}>
                <div className={`${styles['session-col']} ${styles['session-id']}`}>
                    # - { session.id }
                </div>
                <div className={`${styles['session-col']} ${styles['session-dates']}`}>
                    <div className={styles['session-date']}>
                        Start: { convertTimeToVisual(session.start) || '-' }
                    </div>
                    <div className={styles['session-date']}>
                        End: { convertTimeToVisual(session.end) || '-' }
                    </div>
                </div>
                <div className={`${styles['session-col']} ${styles['session-time']}`}>
                    { convertSecondsToVisual(session.totalTime) }
                </div>
        </div>
    )
}