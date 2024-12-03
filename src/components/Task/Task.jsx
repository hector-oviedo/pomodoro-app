import { TrashIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { getActiveTask } from '../../selectors/tasksSelector';
import { TaskInfo } from './TaskInfo/TaskInfo';
import { TaskSessions } from './TaskSessions/TaskSessions';
import { RemovePopup } from './RemovePopup';

import styles from './Task.module.css';
export const Task = () => {
    const navigate = useNavigate();

    const { TasksState, tasksDispatch, getSectionPath } = useAppContext();

    const ActualTask = getActiveTask(TasksState);

    const [ Id, setId ] = useState();

    const [ Name, setName ] = useState();

    const [ TaskDate, setTaskDate ] = useState();

    const [ Subs, setSubs ] = useState([]);

    const [ Sessions, setSessions ] = useState([]);

    const [ TotalTime, setTotalTime ] = useState();

    const [ Note, setNote ] = useState();

    const [ PopupVisible, setPopupVisible ] = useState(false);

    useEffect(() => {
        if (ActualTask) {
            setId(ActualTask.id);
            setName(ActualTask.name);
            setTaskDate(ActualTask.dateCreation);
            setTotalTime(ActualTask.totalTime);
            setSubs(ActualTask.subs);
            setSessions(ActualTask.sessions);
            setNote(ActualTask.note);
        } else navigate(getSectionPath('TASK_CREATE'))
    },[ActualTask])

    const onClickHandle = () => {
        navigate(getSectionPath('POMODORO'));
    };

    const onRemoveHandle = () => {
        setPopupVisible(false)

        const payload = Id;

        tasksDispatch({ type: 'DELETE', payload })

        navigate(getSectionPath('DAYS'));
    }

    const onCloseHandle = () => {
        setPopupVisible(false)
    }

    const openPopup = () => {
        setPopupVisible(true)
    }

    return (
        <section className={styles['task-container']}>
            {
                
                PopupVisible && (
                    <RemovePopup
                        taskName={Name}
                        onRemove={onRemoveHandle}
                        onClose={onCloseHandle}/>
                )
            }
            <TaskInfo
                Name={Name}
                TaskDate={TaskDate}
                Subs={Subs}
                TotalTime={TotalTime}
                Sessions={Sessions}
                onClickHandle={onClickHandle}/>
            <div className={styles['notes']}>
                <input
                    type="text"
                    className={styles['notes-input']}
                    placeholder="Empty Note"
                    value={Note || ''}
                    onChange={() => {}}
                />
            </div>
            <TaskSessions sessions={Sessions}/>
            <div className={styles['remove-cell']}>
                <button className={styles['remove-button']} onClick={() => { openPopup() }}>
                    <TrashIcon className={styles['remove-icon']} />
                </button>
            </div>
        </section>
    );
};