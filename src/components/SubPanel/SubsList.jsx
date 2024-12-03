import { useAppContext } from '../../contexts/AppContext';
import { getSub } from '../../selectors/subsSelector';
import { getTasksBySubIdAndEntryId, searchTasksBySubIdAndEntryId } from '../../selectors/tasksSelector';
import { List } from './List';

import styles from './SubsList.module.css';
export const SubsList = ({subId, filter}) => {
    const { TasksState, SubsState } = useAppContext();
    
    const ActualList = getSub(SubsState, subId).entries;

    return (
        <div className={styles['main-list']}>
            <div>
                {
                    ActualList.map((item) => {
                        return (
                        <List
                            key={item.id}
                            name={item.name}
                            tasks={searchTasksBySubIdAndEntryId(TasksState, subId, item.id, filter)}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}