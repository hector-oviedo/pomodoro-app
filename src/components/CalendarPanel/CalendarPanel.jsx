import { CalendarDayList } from './CalendarDay/CalendarDayList';

import styles from './CalendarPanel.module.css';
export const CalendarPanel = () => {
    return (
        <section className={styles['calendar-container']}>
            <CalendarDayList/>
        </section>
    )
}