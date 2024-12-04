import { calculateTimelineSegments } from '../../../../helpers/timelineHelper';

import styles from './DayTimeline.module.css';
export const DayTimeline = ({ totalTime, tasks }) => {
    const segments = calculateTimelineSegments(tasks);

    return (
        <div className={styles['timeline-container']}>

            <div className={styles['timeline-bar']}>
            {
                segments.map((segment, index) => (
                    <div
                        key={index}
                        className={styles['timeline-segment']}
                        style={{
                            left: `${segment.startPercent}%`,
                            width: `${segment.widthPercent}%`,
                        }}/>
                ))
            }
            </div>
            <div className={styles['total-time']}>
                {totalTime}
            </div>
        </div>
    )
}