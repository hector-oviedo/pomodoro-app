import { PlayIcon } from '@heroicons/react/24/solid';
import { useAppContext } from '../../../contexts/AppContext.jsx';
import { convertDateToVisual, convertSecondsToVisual } from '../../../helpers/formatFields.js';
import { getSub, getSubEntry } from '../../../selectors/subsSelector';

import { TaskStateIcon } from './TaskStateIcon.jsx';

import styles from './TaskInfo.module.css';
export const TaskInfo = ({Name, TaskDate, Subs, TotalTime, Sessions, onClickHandle}) => {
    const { SubsState } = useAppContext();

    const getState = () => {
        let touched = false;
        let completed = true;
        Sessions.map(session => {
            if (session.totalTime !== 0) touched = true;
            if (session.totalTime === 0) completed = false;
        })
        if (completed) return 'completed';
        if (touched) return 'progress';
        return 'empty';
    }
    return (
        <div className={styles['task-info-container']}>
            <div className={styles['info-left']}>
                <div className={styles['task-name']}>{Name}</div>
                <div className={styles['task-date']}>{convertDateToVisual(TaskDate)}</div>

                {
                    Subs.map((sub, index) => {
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
            {
                getState() !== 'completed' ?
                <div className={styles['info-action']}>  
                    <div className={styles['action-button-container']}>
                    
                        <button className={styles['task-button']} onClick={onClickHandle}>
                            
                                <PlayIcon className={styles['task-button-icon']} />
                                
                        </button>
                        
                    </div>
                </div>
                : ''
            }
            <div className={styles['info-state']}>
                <div className={styles['info-state-time']}>{convertSecondsToVisual(TotalTime)}</div>
                <TaskStateIcon state={getState()}/>
            </div>
        </div>
    )
}