import { useAppContext } from '../../../contexts/AppContext';
import { getTasksDaysCollections } from '../../../selectors/tasksSelector';
import { Day } from './Day/Day';

import styles from './CalendarDayList.module.css';
export const CalendarDayList = () => {
    const { TasksState } = useAppContext();
    
    const Days = getTasksDaysCollections(TasksState);

    return (
        <section className={styles['categories-list-container']}>
            {
                Days.map((day) => {
                    return (
                    <Day
                        key={day.id}
                        day={day}/>
                    )
                })
            }
        </section>
    )
}