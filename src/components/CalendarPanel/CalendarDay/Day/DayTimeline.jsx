import styles from './DayTimeline.module.css';

export const DayTimeline = ({ timeline, totalTime }) => {
    return (
        <div className={styles['timeline-container']}>

            <div className={styles['timeline-bar']}>

            </div>
            <div className={styles['total-time']}>
                {totalTime}
            </div>
        </div>
    )
}