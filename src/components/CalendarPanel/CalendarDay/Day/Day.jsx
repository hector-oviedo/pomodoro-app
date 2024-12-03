import { DayHeader } from "./DayHeader"
import { DayTaskList } from "./DayTaskList"

import styles from './Day.module.css';
export const Day = ({day}) => {
    return (
        <div className={styles['day-container']}>
            <DayHeader
                day={day}
                />
            <DayTaskList
                tasks={day.tasks}/>
        </div>
    )
}