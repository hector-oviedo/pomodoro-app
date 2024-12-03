import { PlayIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../../contexts/AppContext';
import { getSub, getSubEntry } from '../../../../selectors/subsSelector';

import styles from './DayTaskListItem.module.css';

export const DayTaskListItem = ({task}) => {
    const navigate = useNavigate();

    const { SubsState, tasksDispatch } = useAppContext();

    const { name, subs, totalTime } = task;

    const onClickHandle = () => {
        tasksDispatch({ type: 'SET_ACTIVE', payload: task.id });
        navigate('/task')
    }

    return (
        <article className={styles['task-container']}>
            <div className={styles['task-row']}>

                <div className={styles['task-col-side']}>
                
                    <button className={styles['start-button']} onClick={onClickHandle}>
                        <PlayIcon className={styles['start-button-icon']}/>
                    </button>
            
                </div>

                <div className={styles['task-col']}>
                    <div className={styles['task-name']}>{name}</div>

                    {
                        subs.map((sub, index) => {
                            const subObject = getSub(SubsState, sub.subId);
                            const entryObject = getSubEntry(SubsState, sub.subId, sub.entryId)

                            return (
                                <div key={index} className={styles['subs-item']}>
                                    { subObject.navLabel } - {entryObject.name || 'N/A'}
                                </div>
                            );
                        })
                    }
                    
                </div>

                <div className={styles['task-col-side']}>
                    <div className={styles['total-time']}>{totalTime}</div>
                </div>
            </div>

        </article>
    )
}