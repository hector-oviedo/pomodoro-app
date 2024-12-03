import { useAppContext } from '../../../contexts/AppContext';
import { getActiveTask } from '../../../selectors/tasksSelector';
import { getSub, getSubEntry } from '../../../selectors/subsSelector';

import styles from './PomodoroInfo.module.css';
export const PomodoroInfo = () => {
    const { TasksState, SubsState } = useAppContext();

    const Task = getActiveTask(TasksState);

    if (!Task) return <></>;

    const { name, subs = [] } = Task;
    
    return (
        <div className={styles['info-container']}>
            <div className={styles['info-body']}>
                <div className={styles['info-name']}>Task - { name }</div>

                {
                    subs.map((sub, index) => {
                        
                        const subObject = getSub(SubsState, sub.subId);
                        const entryObject = getSubEntry(SubsState, sub.subId, sub.entryId)

                        return (
                            <div key={index} className={styles['info-sub']}>
                                { subObject.navLabel } - {entryObject.name || 'N/A'}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}