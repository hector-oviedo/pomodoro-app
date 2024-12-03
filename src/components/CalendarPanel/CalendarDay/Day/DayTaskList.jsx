import { DayTaskListItem } from './DayTaskListItem';

import styles from './DayTaskList.module.css';
export const DayTaskList = ({tasks = []}) => {
    return (
        <div className={styles['days-list']}>
            {
            tasks.map((task) => {
                return <DayTaskListItem
                    key={task.id}
                    task={task}/>
            })
            }
        </div>
    )
}