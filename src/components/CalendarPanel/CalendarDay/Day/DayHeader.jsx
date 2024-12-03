import { DayTimeline } from './DayTimeline';

import styles from './DayHeader.module.css';
export const DayHeader = ({day}) => {
    const { label, date, totalTime } = day;
    return (
        <div className={styles['header-container']}>
            <div className={styles['header-title']}>
                {label ? (
                    <>
                        <span
                            className={`${styles['header-title-span']} ${
                                label === 'Today' ? styles['header-today-color'] : ''
                            } ${
                                label === 'Yesterday' ? styles['header-yesterday-color'] : ''
                            }`}>
                            {label} &nbsp;
                        </span>
                        {date}
                    </>
                ) : (
                    <span className={`${styles['header-title-span']} ${styles['header-default-color']}`}>{date}</span>
                )}
            </div>
            <div className={styles['header-row']}>
                <DayTimeline
                    timeline=""
                    totalTime={totalTime}/>
            </div>
            
        </div>
    )
}