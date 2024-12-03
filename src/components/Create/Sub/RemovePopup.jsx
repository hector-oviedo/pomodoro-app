import { XMarkIcon } from '@heroicons/react/24/solid';
import { useAppContext } from "../../../contexts/AppContext";
import { getTasksBySubIdAndEntryId } from '../../../selectors/tasksSelector';

import styles from './RemovePopup.module.css';
export const RemovePopup = ({item, onRemove, onClose, subId}) => {
    const { TasksState } = useAppContext();

    const Tasks = getTasksBySubIdAndEntryId(TasksState,subId, item.id)

    return (
        <div className={styles['popup-container']}>

        <article className={styles['popup-wrapper']}>
            <header className={styles['popup-header']}>
                <span className={styles['popup-header-text']}>Delete - ({item.name})</span>
                <button className={styles['close-button']} onClick={onClose}>
                    <XMarkIcon className={styles['close-icon']} />
                </button>
            </header>
            <section className={styles['popup-body']}>
                <div>{`Are you sure you want to remove ${item.name}?`}</div>
                {
                    Tasks.length ?
                        (
                        <>
                            <div>This items contains the next tasks assigned:</div>
                            <div className={styles['tasks-list']}>
                                {
                                    Tasks.map(task => <div key={task.id} className={styles['task-item']}>{task.name}</div>)
                                }
                            </div>
                            <div className={styles['tasks-warning']}>*IMPORTANT: All tasks associated with {item.name} will be deleted.</div>
                        </>
                        ) :''
                }
            </section>
            <footer className={styles['popup-footer']}>
                <button className={styles['remove-button']} onClick={() => { onRemove(item.id)}}>
                        Delete
                    </button>
            </footer>
        </article>
        </div>
    )
}